<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Course;

class CourseTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function test_course_api_get_all(): void
    {
        $response = $this->get('/api/courses');

        $response->assertStatus(200);
    }

    public function test_course_api_get_detail_success(): void
    {
        $course = Course::first();
        $slug = $course->slug;

        $response = $this->get('/api/courses/' . $slug);

        $response->assertStatus(200);
    }

    public function test_course_api_get_detail_failed(): void
    {
        $response = $this->get('/api/courses/invalid-slug');

        $response->assertStatus(404);
    }
}
