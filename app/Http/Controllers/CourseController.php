<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Services\WebPurifyService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function getAllCourse()
    {
        $courses = Course::all();

        return Inertia::render('Welcome', [
            'data' => $courses,
        ]);
    }
    protected $webPurifyService;

    public function __construct(WebPurifyService $webPurifyService)
    {
        $this->webPurifyService = $webPurifyService;
    }

    public function submitCourse(Request $request)
    {
        // Validate the request data
        $request->validate([
            'course_title' => 'required|string|max:255',
            'course_desc' => 'required|string|max:255',
            'course_category' => 'required|string',
            'course_hours' => 'required|int',
            'course_level' => 'required|string',
        ]);

        $courseContent = $request->input('course_title') . ' ' . $request->input('course_desc');

        $moderationResult = $this->webPurifyService->moderateText($courseContent);

        if ($moderationResult['status'] === 'contains_profanity') {
            return response()->json([
                'message' => 'Content contains inappropriate language'
            ]);
        }


        $user = Auth::user();

        $course = Course::create([
            'course_teacher_id' => $user->id,
            'course_title' => $request->course_title,
            'course_desc' => $request->course_desc,
            'course_category' => $request->course_category,
            'course_hours' => $request->course_hours,
            'course_level' => $request->course_level,
        ]);

        return Inertia::render('Teacher', ['message' => "Course Submitted Successfully."]);
    }
}
