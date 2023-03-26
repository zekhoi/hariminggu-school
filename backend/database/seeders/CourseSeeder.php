<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Arr;
use App\Models\Course;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Laravel',
                'slug' => 'laravel',
                'headline' => 'Belajar Laravel dengan Ahlinya Hanya dalam Waktu 4 Minggu',
                'description' => 'Tingkatkan skill programming-mu dengan belajar laravel dan jadilah web developer yang siap kerja.',
                'category' => 'ProClass',
                'price' => 500000,
                'duration' => 1,
                'batch' => 1,
                'image' => 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg',
                'curriculums' => [
                    [
                        'name' => 'Introduction of Laravel PHP Framework',
                    ],
                    [
                        'name' => 'Migrations',
                    ],
                    [
                        'name' => 'Using Forms and Gathering Input',
                    ],
                    [
                        'name' => 'Creating a registration & user login form',
                    ],
                    [
                        'name' => 'Admin Panel Setup',
                    ],
                    [
                        'name' => 'Using Controllers and Routes for URLs and APIs',
                    ],
                    [
                        'name' => 'Eloquent ORM (Storing and Using Data)',
                    ],
                    [
                        'name' => 'Creating and Using Composer Packages',
                    ],
                    [
                        'name' => 'Using Ajax and jQuery',
                    ]
                ]
            ],
            [
                'name' => 'Persiapan Kerja',
                'slug' => 'persiapan-kerja',
                'headline' => 'Dapatkan Pekerjaan Impianmu Hanya dalam 8 Minggu',
                'description' => 'Sudah belajar sana-sini tapi belum dapat kerja? Kelas Persiapan Kerja solusinya! Dapatkan career coaching dari para expert dan raih pekerjaan impianmu dalam waktu singkat.',
                'category' => 'ProClass',
                'price' => 500000,
                'duration' => 2,
                'batch' => 1,
                'image' => 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg',
                'curriculums' => [
                    [
                        'name' => 'Set Your Future Career Path',
                    ],
                    [
                        'name' => 'Personal Branding',
                    ],
                    [
                        'name' => 'Build Your Network',
                    ],
                    [
                        'name' => 'Curriculum Vitae 101',
                    ],
                    [
                        'name' => 'Portfolio',
                    ],
                    [
                        'name' => 'Marketing & Creative Career',
                    ],
                    [
                        'name' => 'Finance & Accounting Career',
                    ],
                    [
                        'name' => 'Human Resources & General Admin (HRGA) Career',
                    ],
                    [
                        'name' => 'Product & IT Careers',
                    ],
                    [
                        'name' => 'Startup Industry',
                    ]
                ]
            ],
            [
                'name' => 'SEO Specialist',
                'slug' => 'seo-specialist',
                'headline' => 'Siap Jadi SEO Specialist dalam Waktu 8 Minggu',
                'description' => 'Ikuti kelas SEO bersama para expert. Tingkatkan skill SEO-mu dan jadilah SEO Specialist dalam waktu singkat.',
                'category' => 'ProClass',
                'price' => 1000000,
                'duration' => 2,
                'batch' => 1,
                'image' => 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg',
                'curriculums' => [
                    [
                        'name' => 'Introduction to SEO',
                    ],
                    [
                        'name' => 'Keyword Research',
                    ],
                    [
                        'name' => 'SEO Content',
                    ],
                    [
                        'name' => 'Build your website with simple wordpress',
                    ],
                    [
                        'name' => 'On-page SEO',
                    ],
                    [
                        'name' => 'Off-page SEO',
                    ],
                    [
                        'name' => 'Mobile SEO',
                    ],
                    [
                        'name' => 'Technical SEO',
                    ],
                    [
                        'name' => 'Google Analytic & Google Search Console',
                    ],
                    [
                        'name' => 'Advance Analytic & Reporting SEO',
                    ]
                ]
            ],
            [
                'name' => 'Digital Marketer',
                'slug' => 'digital-marketer',
                'headline' => 'Siap Kerja Menjadi Digital Marketer Professional dalam 24 Minggu',
                'description' => 'Belajar Digital Marketing dengan Job Guarantee Program paling terjangkau di Indonesia. Apabila setelah lulus kamu masih menganggur dalam 365 hari dapatkan refund 110%.',
                'category' => 'Bootcamp',
                'price' => 3000000,
                'duration' => 4,
                'batch' => 7,
                'image' => 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg',
                'curriculums' => [
                    [
                        'name' => 'Introduction to Digital Marketing',
                    ],
                    [
                        'name' => 'Brand Value Proposition',
                    ],
                    [
                        'name' => 'Content Marketing',
                    ],
                    [
                        'name' => 'Landing Page Creation',
                    ],
                    [
                        'name' => 'Social Media Marketing Part 1',
                    ],
                    [
                        'name' => 'Social Media Marketing Part 2',
                    ],
                    [
                        'name' => 'Online Ads & Performance Marketing Strategy Part 1',
                    ],
                    [
                        'name' => 'Online Ads & Performance Marketing Strategy Part 2',
                    ],
                    [
                        'name' => 'Search Engine Optimization',
                    ]
                ]
            ],
            [
                'name' => 'UI/UX Research & Design',
                'slug' => 'ui-ux-research-design',
                'headline' => 'Siap Kerja Menjadi UI/UX Researcher & Designer dalam 16 Minggu',
                'description' => 'Belajar UI/UX Research & Design dengan lebih hemat plus Job Guarantee program. Apabila setelah lulus kamu masih menganggur dalam 365 hari dapatkan refund 110%.',
                'category' => 'Bootcamp',
                'price' => 3000000,
                'duration' => 3,
                'batch' => 5,
                'image' => 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg',
                'curriculums' => [
                    [
                        'name' => 'Product Development Process (UI/UX Perspective)',
                    ],
                    [
                        'name' => 'UI/UX Overview',
                    ],
                    [
                        'name' => 'Method of Research',
                    ],
                    [
                        'name' => 'User Research',
                    ],
                    [
                        'name' => 'User Persona',
                    ],
                    [
                        'name' => 'User Journey',
                    ],
                    [
                        'name' => 'Basic HCI (Human-Computer Interaction)',
                    ],
                    [
                        'name' => 'Design Priciple and Fundamentals',
                    ],
                    [
                        'name' => 'Figma Part 1',
                    ],
                    [
                        'name' => 'Figma Part 2',
                    ]
                ]
            ],
            [
                'name' => 'Big 4 Auditor & Financial Analyst',
                'slug' => 'big-4-auditor-financial-analyst',
                'headline' => 'Siap Kerja Menjadi Auditor & Financial Analyst dalam 24 Minggu',
                'description' => 'Belajar Audit dan Financial Analysis dengan Job Guarantee Program paling terjangkau di Indonesia. Apabila setelah lulus kamu masih menganggur dalam 365 hari dapatkan refund 110%.',
                'category' => 'Bootcamp',
                'price' => 3000000,
                'duration' => 5,
                'batch' => 7,
                'image' => 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg',
                'curriculums' => [
                    [
                        'name' => 'Introduction to Audit Business',
                    ],
                    [
                        'name' => 'Basic Accounting',
                    ],
                    [
                        'name' => 'Audit Foundation',
                    ],
                    [
                        'name' => 'Ms. Excel for Auditor Profession',
                    ],
                    [
                        'name' => 'Cash and Cash Equivalents',
                    ],
                    [
                        'name' => 'Trade Receivables and Other Assets',
                    ],
                    [
                        'name' => 'Audit Inventory',
                    ],
                    [
                        'name' => 'Tangible & Intangible Assets',
                    ],
                    [
                        'name' => 'Liabilities and Trade Payables',
                    ],
                    [
                        'name' => 'Bond Payables',
                    ]
                ]
            ],
            [
                'name' => 'Human Resources',
                'slug' => 'human-resources',
                'headline' => 'Siap Kerja Menjadi HR Profesional dalam 24 Minggu',
                'description' => 'Tingkatkan skill menjadi Human Resource profesional dengan Job Guarantee Program paling terjangkau di Indonesia. Dapatkan unlimited career support sampai kamu diterima bekerja.',
                'category' => 'Bootcamp',
                'price' => 3000000,
                'duration' => 5,
                'batch' => 5,
                'image' => 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg',
                'curriculums' => [
                    [
                        'name' => 'Introduction to Human Resources',
                    ],
                    [
                        'name' => 'Personality and Values',
                    ],
                    [
                        'name' => 'Corporate Culture',
                    ],
                    [
                        'name' => 'Teamwork Management',
                    ],
                    [
                        'name' => 'Introduction to Talent Management',
                    ],
                    [
                        'name' => 'Recruitment Process - Part 1',
                    ],
                    [
                        'name' => 'Recruitment Process - Part 2',
                    ],
                    [
                        'name' => 'People Development',
                    ],
                    [
                        'name' => 'Training and Learning Development',
                    ],
                    [
                        'name' => 'Performance Evaluation and Performance Appraisal',
                    ]
                ]
            ],
            [
                'name' => 'Full-stack Web Developer',
                'slug' => 'full-stack-web-developer',
                'headline' => 'Siap Kerja Menjadi Full-Stack Web Developer dalam 24 Minggu',
                'description' => 'Belajar Full-Stack Web Development lebih hemat plus Job Guarantee program. Apabila setelah lulus kamu masih menganggur dalam 365 hari dapatkan refund 110%.',
                'category' => 'Bootcamp',
                'price' => 3000000,
                'duration' => 3,
                'batch' => 7,
                'image' => 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg',
                'curriculums' => [
                    [
                        'name' => 'Project Management',
                    ],
                    [
                        'name' => 'HTML',
                    ],
                    [
                        'name' => 'CSS',
                    ],
                    [
                        'name' => 'Javascript',
                    ],
                    [
                        'name' => 'ReactJS',
                    ],
                    [
                        'name' => 'NodeJS for Rest API',
                    ],
                    [
                        'name' => 'Database Basic',
                    ],
                    [
                        'name' => 'Database: Query Design and Function',
                    ],
                    [
                        'name' => 'VCS (Version Control Service)',
                    ],
                    [
                        'name' => 'Career 101: Pursue Your Career in Tech',
                    ]
                ]
            ]
        ];

        foreach ($data as $courseData) {
            $course = Course::create([
                'name' => $courseData['name'],
                'slug' => $courseData['slug'],
                'headline' => $courseData['headline'],
                'description' => $courseData['description'],
                'category' => $courseData['category'],
                'price' => $courseData['price'],
                'duration' => $courseData['duration'],
                'batch' => $courseData['batch'],
                'image' => $courseData['image']]
            );

            foreach($courseData['curriculums'] as $curriculumData) {
                $course->curriculums()->create($curriculumData);
            };
        };
    }
}
