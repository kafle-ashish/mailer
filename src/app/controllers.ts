import { Request, Response } from 'express';
import { transporter } from '../config';
import SellerTemplate from './templates/seller';

const send = async (req: Request, res: Response) => {
    try {
        transporter.sendMail(
            {
                from: 'Shop2More <seller@shop2more.com>',
                to: req.body.to,
                subject: req.body.subject,
                text: req.body.text,
                html: SellerTemplate({ name: 'Ashish Kafle' }),
            },
            (err: any, data: any) => {
                if (err) {
                    return res.status(400).json({
                        error: 'Error ocurred!',
                        err,
                    });
                }
                return res.status(200).json({
                    message: 'Mail sent!',
                    result: data,
                });
            },
        );
    } catch (e) {
        return res.status(400).json({
            error: 'Error ocurred!',
            err: e,
        });
    }
};

const test = async (req: Request, res: Response) => {
    try {
        const options = {
            from: 'Shop2More <seller@shop2more.com>',
            to: 'blazinasis@gmail.com',
            subject: 'Test Mail',
            text: 'Test',
            html: SellerTemplate({ name: 'Ashish Kafle' }),
        };

        const data = await transporter.sendMail(options);

        return res.status(200).json({
            message: 'Mail sent!',
            result: data,
        });
    } catch (e) {
        return res.status(400).json({
            error: 'Error ocurred!',
            err: e,
        });
    }
};

export { send, test };
