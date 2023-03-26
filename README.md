# Case Study Harisenin.com

Terdapat dua folder yaitu `frontend` dan `backend`, di mana `frontend` berisi source code untuk tampilan menggunakan `next.js` dan `backend` berisi source code untuk server dan data menggunakan `laravel`.

# Tech Stack

- Next.js
- Laravel
- PostgreSQL (supabase)

# How to run

### Frontend

- `cd frontend`
- `yarn install`
- `yarn dev`
- `open http://localhost:3000`

### Backend

- `cd backend`
- `composer install`
- `php artisan serve`
- `open http://localhost:8000`

# Demo

- [Frontend](https://hariminggucom.vercel.app/)
- [Backend](https://hariminggu.fly.dev/)

# API Documentation

## Get All Course

METHOD: GET

URL: https://hariminggu.fly.dev/api/courses

Query Parameter:

- `category` (optional): Bootcamp|ProClass

## Get Course Detail

METHOD: GET

URL: https://hariminggu.fly.dev/api/courses/{slug}
