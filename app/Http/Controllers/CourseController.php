<?php
// CourseController.php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Services\WebPurifyService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CourseController extends Controller
{
    protected $webPurifyService;

    public function __construct(WebPurifyService $webPurifyService)
    {
        $this->webPurifyService = $webPurifyService;
    }

    public function submitCourse(Request $request)
    {
        $request->validate([
            'course_title' => 'required|string|max:255',
            'course_desc' => 'required|string|max:255',
            'course_category' => 'required|string',
            'course_hours' => 'required|int',
            'course_level' => 'required|string',
        ]);

        // Get course description to moderate
        $courseContent = $request->input('course_desc');

        // Use WebPurifyService to check for profanity
        $moderationResult = $this->webPurifyService->moderateText($courseContent);

        // If the content contains profanity, reject it
        if ($moderationResult['status'] === 'contains_profanity') {
            return response()->json([
                'error' => 'Content contains inappropriate language.',
                'terms' => $moderationResult['terms']
            ], 400);
        }

        $user = Auth::user();


        // If content is clean, store the course
        $course = Course::create([
            'course_teacher_id' => $user->id,
            'course_title' => $request->course_title,
            'course_desc' => $request->course_desc,
            'course_category' => $request->course_category,
            'course_hours' => $request->course_hours,
            'course_level' => $request->course_level,
        ]);

        return response()->json(['message' => 'Course submitted successfully!']);
    }
}
