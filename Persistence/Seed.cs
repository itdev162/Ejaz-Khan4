using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
  public class Seed
  {
    public static void SeedData(DataContext context)
    {
      if (!context.Posts.Any())
      {
        var Posts = new List<Post>
            {
              new Post {
                Title = "First post!",
                Date = DateTime.Now.AddDays(-10),
                Body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              new Post {
                Title = "This is my second post.",
                Date = DateTime.Now.AddDays(-7),
                Body = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
              },
              new Post {
                Title = "Another day, another post",
                Date = DateTime.Now.AddDays(-4),
                Body = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
              }
            };

        context.Posts.AddRange(Posts);
        context.SaveChanges();
      }
    }
  }
}