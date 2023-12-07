package dev.alviamovies.movieplayer.models;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Document(collection = "users")
@Data //takes care of getters and setters
@Builder
@AllArgsConstructor // makes all these values arguments
@NoArgsConstructor // another constructor that takes no args
public class Users implements UserDetails {
    @Id
    private ObjectId userId;
    @NotBlank
    @Size(max = 20)
    private String username;
    @NotBlank
    @Size(max = 120)
    private String password;
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;
    private String phoneNumber;
    @Enumerated(EnumType.STRING)
    private Erole role;

    public Users(String username, String password, String email, String phone) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phoneNumber = phone;
    }

    public Users(Users user) {
        this.username = user.username;
        this.password = user.password;
        this.email = user.email;
        this.phoneNumber = user.phoneNumber;
        this.role = user.role;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
