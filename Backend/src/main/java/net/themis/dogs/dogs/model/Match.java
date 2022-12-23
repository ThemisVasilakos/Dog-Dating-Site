package net.themis.dogs.dogs.model;

import javax.persistence.*;

@Entity
@Table
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long matchId;

    @Column
    private String fromUser;

    @Column
    private String shownUser;

    @Column
    private String liked;

    public Match() {
    }

    public Long getMatchId() {
        return matchId;
    }

    public String getFromUser() {
        return fromUser;
    }

    public void setFromUser(String fromUser) {
        this.fromUser = fromUser;
    }

    public String getShownUserId() {
        return shownUser;
    }

    public void setShownUser(String shownUser) {
        this.shownUser= shownUser;
    }

    public String getLiked() {
        return liked;
    }

    public void setLiked(String liked) {
        this.liked = liked;
    }


}
