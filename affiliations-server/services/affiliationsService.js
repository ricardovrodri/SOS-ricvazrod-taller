export function getAffiliations(req, res) {
    res.send([
        {
            "year": 2011,
            "province": "jaen",
            "ss_affiliation": 0,
            "n_cont_indef": 0,
            "n_cont_eventual": 0, 
            "n_cont_temporary": 0
        }
    ]);
}

export function findByyear(req, res) {
    res.send({
        "year": 2011,
        "province": "jaen",
        "ss_affiliation": 0,
        "n_cont_indef": 0,
        "n_cont_eventual": 0, 
        "n_cont_temporary": 0
    });
}

