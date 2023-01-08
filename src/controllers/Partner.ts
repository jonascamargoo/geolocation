import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Partner from '../models/Partner';

// 1.3. Buscar parceiro:
// Dada uma localização pelo usuário da API (coordenadas long e lat), procure o parceiro que esteja mais próximo e que cuja área de cobertura inclua a localização.

//metodo 1
//createPartner
const createPartner = async (req: Request, res: Response, next: NextFunction) => {
    const { tradingName,  ownerName, document, coverageArea, address } = req.body;
        
    const partner = new Partner({
        //_id: new mongoose.Types.ObjectId(),
        tradingName,
        ownerName,
        document,
        coverageArea,
        address

    });

    try {
        const partner_1 = await partner.save();
        return res.status(201).json({ partner });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const loadPartnerById = async (req: Request, res: Response, next: NextFunction) => {
    const partnerId = req.params.id;
    try {
        const partner = await Partner.findById(partnerId);
        return (partner ? res.status(200).json({ partner }) : res.status(404).json({ message: 'Not Found' }));
    } catch (error) {
        return res.status(500).json({ error });
    }
}

const searchNearestPartner = async (req: Request, res: Response, next: NextFunction) => {

}

export default { createPartner, loadPartnerById, searchNearestPartner };


//metodo3
// searchPartner: Given a specific location (coordinates long and lat), search the nearest partner which the coverage area includes the location