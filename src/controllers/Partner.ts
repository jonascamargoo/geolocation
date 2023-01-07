import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Partner from '../models/Partner';


// 1.2. Carregar parceiro pelo id:
// Retornar um parceiro específico baseado no seu campo id com todos os campos apresentados acima.

// 1.3. Buscar parceiro:
// Dada uma localização pelo usuário da API (coordenadas long e lat), procure o parceiro que esteja mais próximo e que cuja área de cobertura inclua a localização.

//metodo 1
//createPartner
const createPartner = async (req: Request, res: Response, next: NextFunction) => {
    const { tradingName,  ownerName, document, coverageArea, address } = req.body;
    
    const partner = new Partner({
        _id: new mongoose.Types.ObjectId(),
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

export default createPartner;



//metodo 2
//loadParntnerById: Return a specific partner by its id with all the fields presented above.

//metodo3
// searchPartner: Given a specific location (coordinates long and lat), search the nearest partner which the coverage area includes the location