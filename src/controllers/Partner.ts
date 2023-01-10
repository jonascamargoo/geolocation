import { json, NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Partner from '../models/Partner';

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

//aqui olharei os que estão na mesma área. Isso retornará um array com os parceiros próximos
		// const partnersAtSameArea = await Partner.find(
		// 	{
		// 	  coverageArea: {
		// 		$geoWithin: {
		// 			 $geometry: {
		// 			   type : 'Multipolygon',
		// 			 coordinates : [longitude, latitude]
		// 		  }
		// 		}
		// 	  }
		// 	}
		// )


	const searchNearestPartner = async (req: Request, res: Response, next: NextFunction) => {
		const coordinates = req.body.coordinates;
		try {
			const nearestPartner = await Partner.findOne(
				{
					address:
						{ $near :
							{
								$geometry: { type: "Point", coordinates: coordinates },
								
							}
							
						}
				}
			).exec();
			return (nearestPartner ? res.status(200).json({ nearestPartner }) : res.status(404).json({ message: 'Not Found' }));
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

const nearPartner = async (req: Request, res: Response, next: NextFunction ) => {
	//const point = json(req.body);
	try {
		const nearest = await Partner.find({
			address:
					{ $near :
							{
								$geometry: {
									type: "Point",
									coordinates: [ -68, 35 ]
								},
								$maxDistance: 100000
								
							}
					}
		});
		return (nearest ? res.status(200).json({ nearest, message: 'It is the nearest' }) : res.status(404).json({ message: 'Not Found' }));
	} catch (error) {
		res.status(500).json({ error });
	}
}

export default { createPartner, loadPartnerById, searchNearestPartner };