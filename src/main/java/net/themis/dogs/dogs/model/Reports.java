package net.themis.dogs.dogs.model;

import javax.persistence.*;

@Entity
public class Reports {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reportId;

    @Column
    private String fromUser;

    @Column
    private String shownUser;

    @Column
    private String reported;

    //Constructors
    public Reports() {
    }

    //Getters and Setters
    public Long getReportId() {
        return reportId;
    }

    public void setReportId(Long reportId) {
        this.reportId = reportId;
    }

    public String getFromUser() {
        return fromUser;
    }

    public void setFromUser(String fromUser) {
        this.fromUser = fromUser;
    }

    public String getShownUser() {
        return shownUser;
    }

    public void setShownUser(String shownUser) {
        this.shownUser = shownUser;
    }

    public String getReported() {
        return reported;
    }

    public void setReported(String reported) {
        this.reported = reported;
    }
}
