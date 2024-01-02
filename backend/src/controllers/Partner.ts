import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Partner from '../models/Partner';

	const createPartner = async (req: Request, res: Response) => {
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

	const loadPartnerById = async (req: Request, res: Response) => {
		const partnerId = req.params.id;
		try {
			const partner = await Partner.findById(partnerId);
			return (partner ? res.status(200).json({ partner }) : res.status(404).json({ message: 'Not Found' }));
		} catch (error) {
			return res.status(500).json({ error });
		}
	}

	const loadPartners = async (req: Request, res: Response) => {
		try {
			const partners = await Partner.find();
			return (partners ? res.status(200).json({ partners }) : res.status(404).json({ message: 'Not Found'}));
		} catch (error) {
			res.status(500).json({ error });
		}
	}

	const searchNearestPartner = async (req: Request, res: Response) => {
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

export default { createPartner, loadPartners, loadPartnerById, searchNearestPartner };