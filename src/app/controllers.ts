import { Request, Response } from 'express';
import { transporter } from '../config';

const send = async (req: Request, res: Response) => {
    try {
        transporter.sendMail(
            {
                from: 'user.verifier.bot@gmail.com',
                to: req.body.to,
                subject: req.body.subject,
                text: req.body.text,
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

export { send };
