package dev.alviamovies.movieplayer.Authentication;

import dev.alviamovies.movieplayer.models.Erole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String username;
    private String email;
    private String password;
    private String phoneNumber;
    private Erole role;
}