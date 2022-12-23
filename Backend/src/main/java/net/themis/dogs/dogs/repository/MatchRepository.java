package net.themis.dogs.dogs.repository;

import net.themis.dogs.dogs.model.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MatchRepository extends JpaRepository<Match,Long> {
    @Query(value = "select shown_user from dogs.match where from_user=?1 and liked=\"yes\"",nativeQuery = true)
    List<String> findMatchByFromUsername(String username);

    @Query(value = "select liked from dogs.match where from_user=?1 and shown_user=?2",nativeQuery = true)
    String findMatchByFromAndToUsername(String fromUsername,String toUsername);
}
