package net.themis.dogs.dogs.service;

import net.themis.dogs.dogs.model.Reports;
import net.themis.dogs.dogs.repository.ReportsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportsService {

    @Autowired
    private ReportsRepository reportsRepository;

    @Autowired
    private CustomUserDetailService userDetailService;

    public Reports defineReports(String username, String reported){
        String loggedUsername = userDetailService.returnUsername();
        Reports reports = new Reports();
        reports.setShownUser(username);
        reports.setReported(reported);
        reports.setFromUser(loggedUsername);

        reportsRepository.save(reports);

        return reports;
    }

    public List<Reports> getAllReports(){
        return reportsRepository.findAll();
    }
}
