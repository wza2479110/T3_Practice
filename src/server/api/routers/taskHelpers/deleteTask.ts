import { protectedProcedure } from "../../trpc";
import { z } from "zod";

export default protectedProcedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    // wait for if the task in the list exited
    await ctx.prisma.task.findFirstOrThrow(
      {
      where: 
      {
        id: input.id,
        userId: ctx.session.user.id,
      },
    });

    // than delete...
    await ctx.prisma.task.delete(
      {
      where: 
      {
        id: input.id,
      },
    });
  });
