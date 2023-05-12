import * as service from '../services/affiliationsService.js';

export function getAffiliations(req, res) {
    service.getAffiliations(req, res);
}

export function findByyear(req, res) {
    service.findByyear(req, res);
}

