package net.themis.dogs.dogs.service;

import net.themis.dogs.dogs.model.Match;
import net.themis.dogs.dogs.repository.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MatchService {

    @Autowired
    private MatchRepository matchRepository;

    public Match saveMatch(Match match){
        return matchRepository.save(match);
    }

    public List<String> findMatchByFromUsername(String username){
        return matchRepository.findMatchByFromUsername(username);
    }

    public String findMatchByFromAndToUsername(String fromUsername,String toUsername){
        return matchRepository.findMatchByFromAndToUsername(fromUsername,toUsername);
    }
}
