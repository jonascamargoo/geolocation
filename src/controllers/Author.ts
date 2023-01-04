import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Author from '../models/Author';

const createAuthor = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;

    const author = new Author({
        _id: new mongoose.Types.ObjectId(),
        name
    });

    try {
        const author_1 = await author.save();
        return res.status(201).json({ author });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const readAuthor = async (req: Request, res: Response, next: NextFunction) => {
    const authorId = req.params.authorId;

    try {
        const author = await Author.findById(authorId);
        return (author ? res.status(200).json({ author }) : res.status(404).json({ message: 'not found' }));
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const readAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authors = await Author.find();
        return res.status(200).json({ authors });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const updateAuthor = async (req: Request, res: Response, next: NextFunction) => {
    const authorId = req.params.authorId;

    try {
        const author = await Author.findByIdAndUpdate(authorId, req.body);
        return (author ? res.status(200).json({ author, message: 'Updated'}) : res.status(404).json({ message: 'Not Found'}))
    } catch (error) {
        return res.status(500).json({ error });
    }
}


const deleteAuthor = async (req: Request, res: Response, next: NextFunction) => {
    const authorId = req.params.authorId;

    try {
        const author = await Author.findByIdAndDelete(authorId);
        return (author ? res.status(200).json({ author, message: 'Deleted' }) : res.status(404).json({ message: 'Not Found'}))
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export default { createAuthor, readAuthor, readAll, updateAuthor, deleteAuthor };