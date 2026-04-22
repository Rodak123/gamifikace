import { z } from 'zod';
export declare const GetScoreboardRequestSchema: z.ZodObject<{
    body: z.ZodObject<{}, z.core.$strip>;
    params: z.ZodObject<{}, z.core.$strip>;
    query: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>;
export declare const GetScoreboardResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: z.ZodObject<{
        scoreboard: z.ZodArray<z.ZodObject<{
            user: z.ZodObject<{
                id: z.ZodString;
                nickname: z.ZodString;
                firstName: z.ZodString;
                lastName: z.ZodString;
                pictureUrl: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            totalXp: z.ZodNumber;
            logs: z.ZodArray<z.ZodObject<{
                userId: z.ZodString;
                achievementKey: z.ZodString;
                earnedAt: z.ZodDate;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
