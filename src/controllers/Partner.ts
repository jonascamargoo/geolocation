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

const loadPartnerById = async (req: Request, res: Response, next: NextFunction) => {
    const partnerId = req.params.id;
    try {
        const partner = await Partner.findById(partnerId);
        return (partner ? res.status(200).json({ partner }) : res.status(404).json({ message: 'Not Found' }));
    } catch (error) {
        return res.status(500).json({ error });
    }
}

const withinPolygons = () => {
	//separar o array de polígonos (multipoligyn) pra, finalmente, utilizar o method whitin do mongoose
	try {
		
	} catch (error) {
		
	}
	
}

const searchNearestPartner = async (req: Request, res: Response, next: NextFunction) => {

	//vou receber um local por parâmetro, restringir os parceiros daquela área (reduzir query) e, finalmente, procurar o mais próximo
	//const coordinates = req.body;
	try {
		const nearest = await Partner.find({
				address:
						{ $near :
								{
									$geometry: {
										type: "Point",
										coordinates: [ -68, 35 ] 
										
										// coordinates: coordinates
									}
								}
						}
		});
		return (nearest ? res.status(200).json({ nearest, message: 'It is the nearest' }) : res.status(404).json({ message: 'Not Found' }));

	} catch (error) {
		res.status(500).json({ error });
	}

}


//para usar após o within
// const query = {
//   address: {
//     $near: {
//       $geometry: {
//         type: "Point",
//         coordinates: [longitude, latitude]
//       },
//       $maxDistance: distanceInMeters
//     }
//   }
// };

// const nearPartner = async (req: Request, res: Response, next: NextFunction ) {
// 	try {
// 		Partner.find(query, (error, places) => {
// 			if (error) {
// 				// handle error
// 			} else {
// 				// 'places' is an array of documents with GeoJSON 'location' fields
// 			}
// 		});
// 	} catch (error) {
		
// 	}
// }

export default { createPartner, loadPartnerById, searchNearestPartner };


//metodo3
// searchPartner: Given a specific location (coordinates long and lat), search the nearest partner which the coverage area includes the location