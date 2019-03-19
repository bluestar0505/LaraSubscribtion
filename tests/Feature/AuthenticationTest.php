<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

use App\Models\User;

class AuthenticationTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * Prepare temp user
     * Declaration of return type as :void MUST BE -- base class contains exactly this version (Laravel v5.8)
     *
     * @return void
     */
    protected function setUp(): void
    {
        parent::setUp();

        $user = new User([
            'email' => 'valid-user@email.com',
            'password' => 'pa$$word',
        ]);

        $user->save();
    }

    /**
     * @test
     */
    public function it_user_will_sign_in()
    {
        $response = $this->post('api/auth/login', [
            'email' => 'valid-user@email.com',
            'password' => 'pa$$word',
        ]);

        $response->assertJsonStructure([
            'access_token',
            'token_type',
            'expires_in',
        ]);
    }

    /**
     * @test
     */
    public function it_invalid_user_will_not_sign_in()
    {
        $response = $this->post('api/auth/login', [
            'email' => 'invalid-user@email.com',
            'password' => 'bad_pa$$word',
        ]);

        $response->assertJsonStructure([
            'error',
        ]);
    }
}
