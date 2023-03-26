<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use Illuminate\Http\Response;
use App\Models\Course;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $category = $request->query('category');

        if(!$category){
            $courses = Course::with('curriculums')->get();

            return response()->json([
                'code' => Response::HTTP_OK,
                'message' => 'List data course',
                'data' => $courses
            ], Response::HTTP_OK);
        }

        $courses = Course::with('curriculums')->where('category', $category)->get();

        return response()->json([
            'code' => Response::HTTP_OK,
            'message' => 'List data course',
            'data' => $courses
        ], Response::HTTP_OK);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCourseRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $detail = Course::with('curriculums')->where('slug', $slug)->first();

        if(!$detail){
            return response()->json([
                'code' => Response::HTTP_NOT_FOUND,
                'message' => 'Data not found'
            ], Response::HTTP_NOT_FOUND);
        };

        return response()->json([
            'code' => Response::HTTP_OK,
            'message' => 'Detail data course',
            'data' => $detail
        ], Response::HTTP_OK);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCourseRequest $request, Course $course)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        //
    }
}
