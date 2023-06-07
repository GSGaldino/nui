import type { NextApiRequest, NextApiResponse } from 'next'
import SheetService from '@/services/SheetService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { range } = req.query;

    if (!range)
      res.status(400).json({
        success: false,
        message: 'Faltando parâmetro: range',
      });

    const data = await SheetService.getRange(range as string);

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Falha ao buscar range',
    });
  }
}
