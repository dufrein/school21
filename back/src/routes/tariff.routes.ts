import express, { Request, Response, Router } from 'express';
import Tariff from '../models/tariff.model';

const router: Router = express.Router();

// Get all tariffs
router.get('/', (async (req: Request, res: Response) => {
  try {
    const tariffs = await Tariff.find();
    res.json(tariffs);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ message: 'Error fetching tariffs', error: errorMessage });
  }
}) as unknown as any);

// Get tariff by ID
router.get('/:id', (async (req: Request, res: Response) => {
  try {
    const tariff = await Tariff.findById(req.params.id);
    if (!tariff) {
      return res.status(404).json({ message: 'Tariff not found' });
    }
    res.json(tariff);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ message: 'Error fetching tariff', error: errorMessage });
  }
}) as unknown as any);

// Create tariff
router.post('/', (async (req: Request, res: Response) => {
  try {
    const tariff = new Tariff(req.body);
    const savedTariff = await tariff.save();
    res.status(201).json(savedTariff);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(400).json({ message: 'Error creating tariff', error: errorMessage });
  }
}) as unknown as any);

// Update tariff
router.put('/:id', (async (req: Request, res: Response) => {
  try {
    const tariff = await Tariff.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tariff) {
      return res.status(404).json({ message: 'Tariff not found' });
    }
    res.json(tariff);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(400).json({ message: 'Error updating tariff', error: errorMessage });
  }
}) as unknown as any);

// Delete tariff
router.delete('/:id', (async (req: Request, res: Response) => {
  try {
    const tariff = await Tariff.findByIdAndDelete(req.params.id);
    if (!tariff) {
      return res.status(404).json({ message: 'Tariff not found' });
    }
    res.json({ message: 'Tariff deleted successfully' });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ message: 'Error deleting tariff', error: errorMessage });
  }
}) as unknown as any);

export default router; 