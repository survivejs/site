---
title: "CV Compiler - The Fastest Way to Improve Your CV - Interview with Andrew Stetsenko"
date: 2020-12-01
headerImage: "assets/img/reactor.jpg"
keywords: ["interview"]
---

When you apply for a new position or a business case, often people want to see your CV (Curriculum Vitae). Although it sounds simple to create one, it's far from it.

[Andrew Stetsenko](https://twitter.com/Stetsenko_me) has created a service that addresses the problem. Read on to learn more.

## Can you tell a bit about yourself?

![Andrew Stetsenko|100|100|author](https://www.gravatar.com/avatar/ddea473871037bade6bd44e266ae6852?s=200)

I'm an HR-Tech entrepreneur with some coding background and a passion for machine learning (ML) and natural language processing (NLP). I started to learn coding in 2003 with C and Visual Basic and worked as a QA engineer in late 2010. This experience helped me to grow my expertise as a tech recruiter later.

I'm not trying to fix recruiting, but do my best to match companies and software engineers better, so I founded a range of products like [CV Compiler](https://cvcompiler.com), [Relocate.me](https://relocate.me), and [GlossaryTech](https://glossarytech.com).

I'm a big fan of long-distance swimming, coffee tasting, and traveling in my spare time.

## How would you describe _CV Compiler_ to someone who has never heard of it?

CV Compiler is an instant resume-checker aimed at helping its users land more job interviews.

There are many topics on the internet about robots—applicant tracking systems—that help rank your resumes and then reject you if it is missing keywords related to the job description. With our team and external NLP scientists, we spent quite some time researching this topic.

Briefly, all that stuff about ATS-compliant resumes is only misleading people. I even [wrote an article](https://cvcompiler.com/blog/do-you-need-an-ats-compatible-resume-when-applying-for-a-tech-job) about it.

T> ATS means applicant tracking systems, and generally, the term is used to describe machine-readable CVs.

Our team followed a more scientific approach, and we built ML algorithms that assess resumes based on feedback from hundreds of recruiters/hiring managers and repeated mistakes in IT resumes.

CV Compiler was launched at the end of 2018. Since then, we've received a great deal of positive feedback from software developers around the world. These developers say that our product helped them significantly increase the number of interviews they received and land their dream job.

## How does _CV Compiler_ work?

After uploading a resume, CV Compiler runs over 30 "resume-checking" algorithms to find weak spots and suggests ways to upgrade. There's also a built-in tool that analyzes your resume profile based on the keywords it contains—e.g., a Java developer with DevOps skills—and gives a list of skills worth adding.

We're also offering many helpful tools and content for the successful job hunt, from job search tactics and job search websites to cover letter templates and so on.

## Why did you develop _CV Compiler_?

Many job applications are being rejected without an interview because of the poor-quality, faceless resumes. Think about companies like Spotify or Amazon, which receive thousands of resumes.

The experience running [Relocate.me job board](https://relocate.me/search) has also shown that resume standards vary from country to country. Moreover, there is no single solution that gives one-size-fits-all recommendations on making your tech resume competitive in the US, Europe, and Asia at the same time.

Most of our resume improvement suggestions to the Relocate.me users were repeatable, meaning we had to explain fundamental resume tweaks repeatedly.

Having many bad resumes from around the world, we first wrote a static Wiki on how to improve a tech resume but then decided to automate the solution to the problem of weak resumes, and that's how CV Compiler was born.

## How does _CV Compiler_ differ from other solutions?

We often call our CV Compiler the fastest way to improve a tech resume. Instead of Googling lots, a person gets a list of proven suggestions within 60 seconds after uploading their resume.

There are many online resume analysis tools, but these services are too generic, meaning multiple professionals can use them, and the results are mediocre and very general. In contrast, the CV Compiler is designed for tech professionals.

We use the taxonomy of over 3k keywords and once in a quarter analyze thousands of job listings to determine the most in-demand tech skills for different developers—JavaScript devs, Ruby devs, Python devs, and the like.

We're also working with various dev communities to share this content, which are the skills most tech employers are looking for today, with everyone — hat tip for contributing to one of our articles about [marketable JavaScript skills](https://cvcompiler.com/blog/game-of-javascript-frameworks-the-most-demanded-front-end-developer-skills-of-2019).

## Can you describe the technical stack of _CV Compiler_? How does it all go together?

We're using Python-based library NLTK and spaCy for tokenization, lemmatization, and POS-tagging. Those are the building blocks of our core technology.

The tool for keyword analysis in large data sets—resumes, job descriptions—is built upon a seq2seq model in TensorFlow.

Using the REST API, our website and our B2B customers receive resume improvement suggestions in different formats—JSON, HTML, and PDF.

Based on one of our products (GlossaryTech), we've collected the taxonomy of technical keywords—2,000+—and their relationships.

We're also working on a React-based online resume builder that converts existing resume templates into editable ones. But it's still in progress.

## What next?

We're currently focused on working with coding boot camps—primarily in the US—and offer a tailored version of CV Compiler to boot camp grads. If you don't have experience in tech or even resume-writing experience, CV Compiler will be a mind-blowing solution to prepare your resume for your first IT job.

Besides this, we're offering an API for Resume Review as a Service. Every recruiting platform or a job board can use our white-label solution to implement an automated resume review as part of their user acquisition strategy and give extra value to existing users.

## What does the future look like for _CV Compiler_ and web development in general? Can you see any particular trends?

I'm a big fan of a seamless user experience when software forecasts your next question or your next user step. So, all the power of web development should make the user flow simpler, more accessible, and mobile-friendly.

The last thing to mention is more accurately a standard, not a trend—data protection and web security. The focus means every software development and architecture should be grounded on keeping user data secured. They should also be unquestionably transparent concerning how software vendors are using our data.

## What advice would you give to programmers getting into web development?

Constant learning and dedication are vital in starting your path in web development. Be patient because the most significant challenge will be in finding your first job. However, once you are there and keep learning, your career will be streamlined, and you can achieve great results.

## Who should I interview next?

[Davy Engone](https://twitter.com/davyengone) for sure; not only because he is a good friend of mine, but he is a passionate front-end developer who runs [Hackages](https://www.hackages.io) education platform for software engineers.

## Any last remarks?

I'm incredibly grateful for this interview invitation, and I can only wish your community growth and all the best.

## Conclusion

Thanks for the interview, Andrew! It feels like you've found a significant intersection between developers and companies. CV is the interface for recruiting, and it makes sense to put specific attention to it to help people find better jobs and companies to find better fits.

T> [See CV Compiler online](https://cvcompiler.com) to learn more.
