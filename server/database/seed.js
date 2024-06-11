import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seedPrompts() {
  try {
    await prisma.prompt.createMany({
      data: [
        {
          title: "Ideas for Blog Topics for [Theme of your Choice].",
          description: "You're a creative who specializes in content generation, and you're going to provide me with innovative and captivating ideas for blog posts. The target audience for this work is an audience interested in [theme of your choice].  1 Understanding the Theme: Think about fascinating or less explored aspects of [theme of your choice]. 2. Target Audience: Define the ideal reader for these articles (beginner, enthusiast, professional). 3. Current Trend: Research current trends related to [theme of your choice]. 4. Unique Approach: Think of unique angles to approach the theme. 5. Potential Titles: Generate 5 to 10 captivating article titles. 6. Article Format: Choose the appropriate format (how-to guide, interview, etc.). 7. Tone and Style: Decide on the tone to use (formal, casual, humorous).",
          Categorie: "Marketing",
          isDefault: true,
        },
        {
          title: "One Minute Script for Advertising [Product, Service or Company].",
          description: "You're an advertising scriptwriter and you're going to write a script for a one-minute commercial about [product, service or company]. The target audience is [define target audience]. 1. introduction (0-10 seconds): Set the scene and start with catchy dialogue or voice-over. 2. Presentation (10-30 seconds): Highlights the benefits of [product, service or company]. 3. Testimonials or Case Study (30-50 seconds): Includes testimonials or shows the impact of the product/service. 4. Call to Action (50-60 seconds): Mention a special offer and give clear instructions. 5. Tone and Style: Make sure the tone is in keeping with the brand.",
          Categorie: "Marketing",
          isDefault: true,
        },
        {
          title: "Inexpensive ways to promote my [Company] with/without [Media Channel].",
          description: "You're a digital marketing strategist and you're going to suggest effective, low-cost ways of increasing [company's] visibility with/without using [media channel]. The target is [define target, such as SMEs, startups]. 1. Online Strategies: Propose digital strategies (social networks, SEO, blog content). 2. Offline Strategies: If applicable, suggest offline methods (networking, local events). 3. Partnerships and Collaborations: Explores ideas for partnerships or collaborations with other brands or influencers. 4. Content Marketing: Advises on the creation of attractive and relevant content. 5. Measuring Success: Explains how to measure the effectiveness of these strategies. 6. Budget and Resources: Suggests ideas that fit within a limited budget.",
          Categorie: "Marketing",
          isDefault: true,
        },
        {
          title: "5 Messages and Calls to Action for [Your Product].",
          description: "You're a copywriter and you're going to create 5 different messages and call-to-action buttons for [your product]. The target is [define target, e.g. online consumers, B2B companies]. 1. message 1: Develop a message based on the main benefit of the product. 2. Message 2: Create a message that creates urgency or scarcity. 3. Message 3: Uses a testimonial or successful use case. 4. Message 4: Proposes a message focused on a special offer or promotion. 5. Message 5: Highlights a unique product feature. 6. Call-to-Action Buttons: Design clear, engaging call-to-action buttons for each message.",
          Categorie: "Marketing",
          isDefault: true,
        },
        {
          title: "Title and Abstract for White Paper on [Theme of Your Choice].",
          description: "You're a writer specializing in B2B content and you're going to create a catchy title and a captivating summary for a white paper on [topic of your choice]. Includes: 1. Impactful title: Write an attention-grabbing title. 2. Engaging Summary: Write a summary that clearly summarizes the key points. 3. Call to Action: Incorporate a call to action to download or learn more. 4. Relevant Keywords: Use keywords for SEO. 5. Reader Benefits: Emphasizes what the reader will learn.",
          Categorie: "Marketing",
          isDefault: true,
        }, 
        {
          title: "Optimizing your social networking presence",
          description: "You're a social media strategist and you're going to explain how to optimize your presence on social networks using the right practices and tools: 1. Existing Network Audit : Start by assessing your current presence. 2. Content Strategies: Develop targeted content strategies. 3. Use of Analytical Tools: Explains how to use analytical tools. 4. community engagement: advises on best engagement practices. 5. Planning and Consistency: Emphasizes the importance of regular planning.",
          Categorie: "Marketing",
          isDefault: true,
        },
        {
          title: "Morning practices for a peaceful mind",
          description: "As an expert in morning routines, you're going to develop a series of morning practices focused on reducing stress and improving mental well-being at the start of the day. 1. identify activities that promote relaxation and mental clarity. 2. Structure a morning routine that includes meditation, light exercise and journaling. 3. Offers tips for maintaining a consistent routine. To be relevant, you'll ask: - Personal preferences for the start of the day. - Current stress and mental well-being challenges. Deliverable format: A personalized morning routine designed to promote a serene state of mind and reduce daily stress.",
          Categorie: "Productivity",
          isDefault: true,
          },
          {
          title: "Techniques for digital disconnection",
          description: "As a digital wellness coach, you'll advise on strategies to reduce excessive use of electronic devices. This will help individuals reduce stress and improve their quality of life. 1. Assess the individual's digital habits. 2. Suggest techniques for limiting time spent online. 3. Shares activities to replace screen time with more enriching moments. To be relevant, you'll need to ask me: - Current habits regarding the use of digital devices. - Personal goals for digital disconnection. Deliverable format: A personalized plan to reduce dependence on electronic devices, including suggestions for offline activities.",
          Categorie: "Productivity",
          isDefault: true,
        },
         {
          title: "Structure my day to be more productive.",
          description: "As a virtual assistant, you'll help structure the day with blocks of time dedicated to specific tasks to avoid procrastination. This will help maximize productivity for someone with a variety of daily goals. 1. identify the main tasks and objectives for the day. 2. Plan the day by allocating specific blocks of time for each task, including strategic breaks. 3. Review the day in the late evening to adjust planning for subsequent days according to achievements and remaining tasks. **To be relevant, you'll ask me:** - The main tasks to be accomplished during the day. - Action plan format (fixed or flexible blocks of time).**Deliverable format:** A detailed daily plan with blocks of time allocated for each main activity and breaks.",
          Categorie: "Productivity",
          isDefault: true,
        },
        {
          title: "Create email templates to save time on correspondence.",
          description: "If you're an expert in digital communications, you'll create templates for everyday communications to reduce the time spent writing e-mails. Ideal for professionals and teams who manage a high volume of electronic correspondence. 1. compile a list of the most frequently sent e-mail types. 2. Creates e-mail templates for these communications, leaving space for personalization.3. Provides guidelines for effectively customizing templates according to recipient and context.To be relevant, you'll ask me: - Examples of common electronic communications. - Level of formality required in e-mails. Deliverable format: A collection of ready-to-use e-mail templates, with instructions for customizing them.",
          Categorie: "Productivity",
          isDefault: true,
        },
        {
          title: "Propose strategies to reduce interruptions and maintain a deep workflow.",
          description: "As a personal productivity expert, you'll come up with strategies for reducing interruptions to maintain a deep state of workflow. This is especially useful for professionals in distracting work environments.1. Identify common sources of interruptions in the work environment. 2. Develops techniques and practices to minimize or eliminate these distractions. 3. Advise on the implementation of a work culture that values periods of uninterrupted concentration. To be relevant, you will ask me: - Nature and frequency of interruptions typically encountered. - Current work environment and possibilities for modification. Deliverable format: A set of customized strategies for minimizing interruptions, enabling extended periods of deep concentration.",
          Categorie: "Productivity",
          isDefault: true,
        },
        {
          title: "Develop self-discipline strategies to stay focused on goals.",
          description: "As a personal development coach, you'll develop self-discipline strategies to help individuals stay focused on their goals without constant supervision. Useful for freelancers and teleworkers. 1. Assess current self-management habits and challenges. 2. Introduces techniques to reinforce self-discipline and motivation. 3. Establishes an action plan to integrate these techniques into daily life. To be relevant, you'll ask: - Short- and long-term personal and professional goals. - Specific difficulties encountered in self-management. Deliverable format: A self-management improvement program, including clear objectives and strategies for achieving them.",
          Categorie: "Productivity",
          isDefault: true,
        },
        {
          title: "Storytelling in Sales",
          description: "You're a narrative sales trainer and you'll explain how to use storytelling to capture the attention and interest of potential customers. Includes: 1. Storytelling principles: Describe the basics of effective storytelling. 2. Story creation: Advises on how to create captivating stories. 3. Emotional Connection: Explains how to establish an emotional connection with the customer. 4. product/service integration: shows how to integrate the product/service into the story. Target audience: [salespeople, marketing professionals, entrepreneurs].",
          Categorie: "Business",
          isDefault: true,
        },
        {
          title: "Retention and Satisfaction of Existing Customers",
          description: "You're an expert in customer relations, and you're going to give strategies for retaining existing customers and increasing their satisfaction. Think about: 1. Loyalty programs: Suggest ideas for loyalty programs. 2. Quality Customer Service: Advise on how to improve customer service. 3. Customized Offers: Explains how to create customized offers. 4. Feedback and Continuous Improvement: Emphasizes the importance of customer feedback. Target audience: [customer relations managers, sales teams, managers].",
          Categorie: "Business",
          isDefault: true,
        },
        {
          title: "Strategies to differentiate from competitors",
          description: "You're a business strategy consultant and you're going to suggest ways to differentiate yourself from the competition in the marketplace. Consider: 1. unique value proposition: develop a distinct value proposition. 2. product/service innovation: suggest ways to innovate. 3. branding strategies: explore ways to strengthen the brand. 4. exceptional customer experience: provides ideas for improving the customer experience. Target audience: [entrepreneurs, marketing managers, business leaders].",
          Categorie: "Business",
          isDefault: true,
        },
        {
          title: "Essential Skills of a Good Salesperson",
          description: "You're a sales trainer and you're going to describe the essential skills of a good salesperson. Includes: 1. Effective Communication: Explains the importance of clear and persuasive communication. 2. Active Listening: Emphasizes the importance of listening to and understanding customer needs. 3. Negotiation and Persuasion: Provides tips on negotiation techniques. 4. time management and organization: advises on effective management of time and priorities. 5. Product/Service Knowledge: Explains why knowing in detail what you're selling is crucial. Target audience: [salespeople, sales representatives, marketing professionals]",
          Categorie: "Business",
          isDefault: true,
        },
        {
          title: "Using Social Media for Sales",
          description: "You're a social media expert and you'll explain how to use social media to increase visibility and credibility as a salesperson. Includes: 1. content strategy: come up with ideas for relevant and engaging content. 2. audience interaction: advise on audience interaction and engagement. 3. Building the Personal Brand: Explains how to build and maintain a strong personal brand. 4. Using the Right Platforms: Provides guidance on choosing the most effective platforms for selling. 5. Measuring Impact: Shows how to track and analyze the impact of social networking activities. Target audience: [salespeople, marketing professionals, entrepreneurs]",
          Categorie: "Business",
          isDefault: true,
        },
        {
          title: "Creating an effective sales pitch for a [Niche] company",
          description: "You're a sales coach and you're going to create an effective and powerful sales pitch for my company [niche] and its products or services. Make sure you : 1. identify Strengths: highlight the unique strengths of the company and its offerings. 2. Customer Needs: Explain how to align the sales pitch with the customer's needs. 3. Sales pitch structure: Proposes a clear and convincing structure. 4 Examples and Evidence: Incorporates concrete examples and data to support the sales pitch. Target audience: [salespeople, entrepreneurs].",
          Categorie: "Business",
          isDefault: true,
        }
      ],
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}
seedPrompts();