package net.themis.dogs.dogs.repository;

import net.themis.dogs.dogs.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);

    @Query(value = "select * from dogs.user where username!=?1 and dog_sex=?2",nativeQuery = true)
    List<User> findByDogSex(String username, String gender);

    @Query(value = "select id from user where username =?1",nativeQuery = true)
    Long findIdByUsername(String username);


    //Queries for updating user's info
    @Modifying
    @Query(value = "update user set username=?1 where username=?2",nativeQuery = true)
    int updateUsername(String username,String loggedUser);

    @Modifying
    @Query(value = "update user set password=?1 where username=?2",nativeQuery = true)
    int updatePassword(String password,String loggedUser);

    @Modifying
    @Query(value = "update user set first_name=?1 where username=?2",nativeQuery = true)
    int updateFirstName(String firstName,String loggedUser);

    @Modifying
    @Query(value = "update user set last_name=?1 where username=?2",nativeQuery = true)
    int updateLastName(String lastName,String loggedUser);

    @Modifying
    @Query(value = "update user set email=?1 where username=?2",nativeQuery = true)
    int updateEmail(String email,String loggedUser);

    @Modifying
    @Query(value = "update user set phone_number=?1 where username=?2",nativeQuery = true)
    int updatePhoneNumber(String phoneNumber,String loggedUser);

    @Modifying
    @Query(value = "update user set dog_name=?1 where username=?2",nativeQuery = true)
    int updateDogName(String dogName,String loggedUser);

    @Modifying
    @Query(value = "update user set breed=?1 where username=?2",nativeQuery = true)
    int updateBreed(String breed,String loggedUser);

    @Modifying
    @Query(value = "update user set age=?1 where username=?2",nativeQuery = true)
    int updateAge(Integer age,String loggedUser);

    @Modifying
    @Query(value = "update user set dog_bio=?1 where username=?2",nativeQuery = true)
    int updateDogBio(String dogBio,String loggedUser);

    @Modifying
    @Query(value = "update user set dog_sex=?1 where username=?2",nativeQuery = true)
    int updateDogSex(String dogSex,String loggedUser);
}
