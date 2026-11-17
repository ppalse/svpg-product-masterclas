# SVPG Product Masterclass: Day 2 Summary

**Presenter:** Jon Moore, Silicon Valley Product Group
**Date:** 17 November 2026
**Scope:** Jon's presentation only (breakout sessions left out)

Day 1 laid the foundation. Day 2 made the model operational: first the rest of the leadership work (topology, strategy, team objectives), then the team's work, product discovery. Jon's reminder for ICs:

> **If you want to stay a successful PM, and not be outsourced to an agent, become very strong at product discovery.**

---

## Opening: questions from Day 1

- **Can teams share an objective?** Yes, that's very normal. Several teams can take on the same problem, but each team owns its **own key results** so nobody escapes accountability. Seating them together for a while helps them work through dependencies.
- **Where do you draw boundaries between overlapping teams?** No topology removes every dependency. Lots of overlap usually means teams are cut too small, or cut by project. **Fewer teams with a wider scope beat many narrow ones.** Bezos settled Amazon's topology debate by organising around the architecture.
- **Jon's elevator pitch for outcomes over predictability:** delivering features nobody uses on time is still waste. Shipping on time tells you nothing about whether customers or the business are better off, and most ideas don't work.

---

## Session 1: Topology, strategy and team objectives

The strategic context chain from Day 1:

```
Business mission & objectives
        ↓
  Product vision
        ↓
  Team topology
        ↓
 Product strategy
        ↓
 Team objectives
        ↓
  Product teams → discovery → delivery
```

### Team topology

**Definition:** the structure of the product teams, especially what each team owns.

**Questions to answer:**

- How many teams can we afford, and what should each focus on?
- What is each team's scope of ownership (its charter)?
- What are the dependencies between teams?
- How do the teams relate to the technology? A topology that fights the architecture makes teams thrash.
- How do the teams relate to the business?
- What expertise does each team need?

**Team size:** there's no fixed ratio. Teams range from 1 PM, a designer if needed, and 2 engineers, up to 1 PM with about 10 engineers, which is pushing it.

**Topology always follows the vision.** For example, marketplaces usually organise around the two sides of the market: early eBay had four teams (buyers, sellers, trust & safety, search), and Uber has riders, drivers and platform.

> "No amount of topology tweaking will make up for a lack of considered, co-ordinated and focused planning from leadership."

Many companies blame their topology. The real root cause is usually **missing leadership work**: no unified vision and no product strategy.

**Three types of team:**

1. **Customer-facing:** products used by customers and users.
2. **Customer-enabling:** internal tools, e.g. an IKEA in-store associate's ordering tool.
3. **Platform**

**Optimise topology for empowerment:**

- **Ownership:** teams feel the product is theirs.
- **Autonomy:** *relative* autonomy, not the six-person-startup kind. "Full-stack engineers" are rare beyond startups.
- **Alignment:** teams are aligned to the vision, the business or a customer group.

### Platform teams

In strong tech companies about **half of engineers work on platform**, and the strongest engineers are placed there. That deep platform work is how small teams above it achieve so much. Platforms:

- **Provide leverage:** hard shared problems such as identity, data, deployment and payments are solved once for everyone.
- **Create a common foundation:** no five different ways to call the same service, and a bug gets fixed in one place.
- **Let teams above own more:** a strong platform makes end-to-end ownership possible, while a weak one forces thin slices.
- **Increase developer speed:** less waiting on environments and on other teams.
- **Increasingly serve agents as well as developers:** agents call your APIs, read your docs and act on your data, so design for them deliberately.

### Trainline topology (case study)

Designed by Jon and the CTO for consistency, for focus on the "Super 7" problems from customer research, and for a strong platform.

| Type | Teams | Role |
|---|---|---|
| **Channel teams** | Web, App, Contact Centre, Enterprise & B2B | Protect core numbers (e.g. conversion) and keep the experience consistent across channels |
| **Mission teams** | Real-time delays, Refunds, Railcards, Insurance, Self Serve | Small, focused teams that move towards the vision; each owns a problem and outcomes |
| **Platform teams** | Supply, Ticketing, Journeys, Identity, Payment, Data, Dev X | Shared foundation underneath everyone |

- Mission teams had **durable embedded specialists**, for example two app developers in the real-time team, so app capability scaled instead of creating hand-offs.
- The **App channel team owned the end-to-end app experience**. It coordinated mission teams in discovery and acted as a guardrail on conversion.
- Jon learned this the hard way at an earlier startup. When Fred Wilson asked "who owns the app?", Jon answered "everyone" and immediately knew that was wrong.

**On SAFe:** Jon called it "process vomit" and pure marketing. SVPG asked strong product companies to report if they used SAFe successfully, and in nine years none has.

### Product strategy

Jon said the two skills that matter most for a product leader are **coaching and product strategy**.

**Definition:** the plan to achieve the product vision *while meeting the business objectives along the way*. It decides the critical problems assigned to teams. It belongs to the product leader (CPO or SVP Product), not to individual PMs.

**Example of having no strategy: Pandora.** Leadership collected 60–80 ideas, put a cost on each, and let stakeholders "buy" them with pretend money. That is a team that only exists to serve the business: lots of features built, no focus. Jon said the same thing happens whenever stakeholders split the roadmap between them, e.g. "you bring 10% of revenue, so you get 10% of the roadmap".

### Trainline product strategy in three steps

**1. Insight**

> "It's not the delay that loses us customers – it's not helping them when it happens."

- Frequent travellers make up 60% of transactions. When they hit a disruption and get no help, they are **30% less likely to rebook**.
- The insight changed the question from "we don't run the trains" to "what *can* we do?": ticketing information, real-time information and predicting disruption.

**2. Strategy (a hypothesis)**

> "If we help travellers the moment things go wrong, they'll stay with us and travel more."

- **Targets:** win back the 30% rebooking drop, raise engagement by 25%+, and lift retention by 5–10%.
- **Prize:** a loyal base worth £70m+ to grow international revenue from 7% to 35%.
- **Evidence:** in early testing, travellers were 18 points more likely to rebook.

**3. Problems for teams**

- **North Star:** every traveller feels certain, informed and in control, whatever happens on their journey.
- Teams focused on journey pain points (→ retention and frequency), channel problems (→ international growth) and platform modernisation (→ revenue diversification and B2B).

**From the Q&A:**

- **When leaders arrive with a solution:** test it quickly, within two weeks, and come back with the data readout. "If you're slow, people fall in love – and love is blind."
- **If leaders dictate the solution,** they own its value. In practice they rarely accept that.
- **If an organisation won't face the reality of its product,** use customers and customer data. Data is the most honest way to start that conversation.
- **How to communicate the strategic context:**
  - **Vision:** video, because it carries emotion, and repeat it at every all-hands.
  - **Team objectives and OKR scores:** highly visible. Jon used to hang them on screens above the teams.
  - **Topology:** communicate it widely, but it changes rarely.

### Team objectives (OKRs)

**Definition:** how leaders assign problems to empowered teams. Each one is a **problem to solve (the objective)** plus a **measure of success (the key results)**.

**Why OKRs often fail:**

- They were born in empowered cultures. Put them on feature teams that are handed roadmaps and you get a mismatch.
- **Cascading objectives** (CEO → VP → function) work in sales or marketing but break cross-functional product teams.
- **To restart OKRs,** focus only on **team-level objectives**, not organisational or individual ones.

**Output vs outcome objectives:**

| Bad (output) | Good (outcome) |
|---|---|
| Implement a knowledge base using GenAI | Reduce Tier 1 support tickets by enabling users to resolve common tech issues via self-service |
| Launch AI fraud detection model | Reduce time to detect and resolve mobile-channel fraudulent account activity without reducing accuracy |
| Create a portal for partner onboarding | Reduce average partner onboarding time |
| Implement blockchain ledger for interbank transfers | Increase transparency and auditability of cross-institution transfers for regulators and member banks |

**How to assign objectives:**

- **1–2 objectives per team per quarter**, ideally one. A team with five objectives has none.
- **Teams give input, but leaders decide** the objectives.
- **Leaders set the ambition level:** a 10% improvement or a 10x leap. For a 10x leap, give teams psychological safety to "take a free swing".
- **Teams sign up for a target** based on that ambition. This can be a negotiation ("what could we stop doing, or what could I give you?"), but don't impose the number, because that isn't empowering.

**Commitments:**

- **High-integrity commitments** are major promises made only after enough discovery. Move heaven and earth to hit them. A miss gets a blameless retro, like a site outage.
- **Keep-the-lights-on work** (bugs, tech debt, refactoring) is always there. This is another reason not to overload teams. "Product teams are like swans": calm on the surface, paddling furiously underneath.

**Collaboration between teams:**

- **Shared objective:** several teams *work together* on one objective, e.g. a platform team and an experience team "swarming".
- **Common objective:** several teams *work independently* on the same hard problem with different approaches. It's not a race; the hope is that all of them succeed.

**Trainline examples:**

- **Real-time (mission team).** *Objective:* travellers feel informed and in control when a journey is disrupted. *Key results:*
  - 60% of disrupted customers take in-app action within 5 minutes.
  - Post-disruption survey score of 4.2/5 or higher.
  - The 13-week repeat booking rate for disrupted customers matches the baseline.
- **Ancillary revenue (mission team).** *Objective:* reduce anxiety by offering contextually relevant insurance. *Key results:*
  - Insured customers show a 15%+ higher repeat purchase rate.
  - 30%+ of insured customers become registered users (vs a 10% baseline).
  - £4M incremental lifetime value through insurance-enabled retention.
- **Web (channel team).** *Objective:* improve international conversion. *Key results:*
  - A blended conversion rate of 6.9%, driving +£4–5m.
  - Journey results visible across all platforms in under 0.5 seconds.
- **Contact Centre (channel team).** *Objective:* improve the post-sale experience. *Key results:*
  - Cost per transaction down from 40p to 25p through self-service and automation.
  - Post-sale NPS of 80+.
  - A £5M savings run rate over 2 years.
  - These pair cost reduction *with* customer satisfaction.

> Only about 9% of the class said they had strategic clarity. Product strategy was the most commonly missing piece.

---

## Session 2: Product creator mindset, discovery and delivery

From here Jon moved from leaders to **teams**.

### Product creator mindset

**Product creators** are the people working hands-on to discover and deliver a successful product: PMs, designers, engineers and data people.

- **Steve Jobs (Lost Interview):** the "disease" of thinking a great idea is 90% of the work. There is tremendous craftsmanship between an idea and a product, and the idea changes as you learn.
- **Chip Huyen:** AI makes building easier, but knowing what to build is still the hard part. Companies that bolt AI onto the project model gain efficiency but see little value.
- **Tom Chi:** prototypes are "truth machines". Move from the idea to something you can see, feel and touch as quickly as possible. This works inside your own team too.
- **Picasso video:** he changed and painted over the same work again and again. Prototyping changes your mind.
- **Ceramics class story:** the "quantity" group made better pots than the "perfection" group. Many iterations beat one: "grandiose theories and one mediocre pot".
- **Marty Cagan:** "Prototyping is how product creators think through product discovery."

### Product discovery

**Definition:** rapidly identifying a solution worth building. Discovery gathers evidence that the solution is **valuable, usable, feasible and viable**, and will achieve the outcome.

| Risk | Question | Owner |
|---|---|---|
| **Value** | Will they use or buy it? | Product manager |
| **Usability** | Can they use it? | Product designer |
| **Feasibility** | Can we build it? | Tech lead |
| **Viability** | Does it work for the business? | Product manager |

**Discovery and delivery happen in parallel in the same team:**

- **Discovery:** build to *learn* (prototypes).
- **Delivery:** build to *earn* (products).

Product management was "born from the tears of engineering": years of building things nobody wanted. Jon recommended *The Inmates Are Running the Asylum* (Alan Cooper).

### Discovery principles

1. **Minimise waste.** "Everyone does product discovery; you can either do it before you build, or after." (Christian Idiodi)
2. **Embrace rapid experimentation.** Have a bias for speed and focus on time to value. Good teams rarely talk about requirements; the only real requirement is solving the problem in a way customers love and that works for the business.
3. **Assess the product risks early.** It's fair for an engineer to ask the PM, "what's the value risk here?"
4. **Test responsibly.** "Go fast and don't break things": go fast in discovery, don't break things in delivery. This replaces "move fast and break things".

### Minimum viable *prototype*, not product

- Many companies treat an MVP as "build half of it and ship it". That misses the point.
- **Replace "product" with "prototype".** Start with a minimum viable prototype that takes hours, not weeks, and expect to throw it away.
- Only discuss a minimum viable *product* once there's evidence the solution works.
- **Access is a precondition.** Strong teams test with users about three times a week (Monday, Wednesday, Friday). That requires access to users, customers, stakeholders, data and engineers, and leaders must remove any blockers.

### Ten lessons from discovery

1. **We can't count on customers (or executives) to tell us what to build.** Customers don't know what's possible, and it's hard to know what you want until you see it.
   - "A thousand focus groups would never give you an iPhone." Nobody asked for Prime or AWS.
   - **NotebookLM:** users asked for better text answers, and the team combined that with new audio models to create podcasts.
   - Customers *can* tell you their problems and context. Your job is to combine the problem with what's newly possible.
2. **The most important thing is to establish value.** Early eBay and Facebook won on value despite poor UIs. In feature-team companies, nobody owns value.
   - **Claude Code** got two likes when it was announced internally, then 50% of Anthropic's engineers used it within five days. Value shows in behaviour, not in reactions.
3. **Engineering is hard, but the product experience is often harder and more important.** Many engineers and no product designer is a red flag.
   - **Intuit Assist** started as a chat box nobody knew what to type into. The team watched small-business owners copying invoice details by hand, redesigned around that work, and added a "slider of autonomy". Invoices now get paid about 5 days faster.
4. **Validate technical feasibility before deciding to build.**
   - **McDonald's and IBM** rolled out AI drive-through ordering to 100+ stores (bacon in ice cream, hundreds of McNuggets) and shut it down in 2024.
   - **Taco Bell** tried it in 500+ restaurants (one order was for 18,000 cups of water) and concluded humans may be better in busy restaurants.
   - Both are feasibility findings.
5. **Validate business viability before deciding to build.** A PM shipped features that broke customer contracts and then the company's own terms, which led to a cease-and-desist and the PM being fired. Legal could have caught it in five minutes. Show stakeholders early.
6. **Go-to-market assumptions matter and are often overlooked.**
   - **Intercom's Fin** AI agent broke per-seat pricing: the better it worked, the fewer seats customers needed.
   - Intercom moved to **outcome-based pricing** of $0.99 per fully resolved conversation, so its whole roadmap now targets resolution rate.
   - "Commercial awareness is part of product management at Intercom."
7. **Functionality, design and technology are intertwined.** PM, designer and tech lead should work together, not one after another.
   - **GitHub Copilot's** early model was wrong about 80% of the time, so the experience became quiet suggestions shown only when confidence was high, not a chatbot.
8. **Most ideas won't work, and the ones that do need several iterations.**
   - **Microsoft:** "It is humbling to see how bad experts are at estimating the value of features."
   - **Google's rate-based goals:** trying 1 solution to a problem gave about a 5% success rate, 20 solutions about 60%, and 50 solutions over 90%.
9. **Use both quantitative and qualitative techniques.** Quant tells you *what* (only 3% click), qual tells you *why*. Apple is great at both, and so is Google.
10. **Validate ideas as quickly and cheaply as possible.** This is the core principle behind discovery.

### Product delivery

**Definition:** building, testing and deploying a product-quality solution that is reliable, accurate, performant, scalable and secure, and delivers the outcome.

> "If it hurts, do it more often." (Jez Humble, *Accelerate*)

**Delivery principles:**

- **Small, frequent, uncoupled releases:** deploy many times a day to limit the blast radius and avoid release trains. Releasing every two months is "integration nightmare" territory.
- **Monitoring:** see health, performance and errors in real time, before customers report them.
- **Instrumentation:** usage and behavioural data so teams can see whether a release moved an outcome.
- **Deployment infrastructure:** secure, repeatable pipelines and environments.

These are table stakes in 2026, and they're a "handshake agreement" between product and engineering. It may take 10–15% of backlog time, on top of about 20% for tech debt.

---

## Session 3: Discovery techniques and framing

### Owlet case study (video)

A class project that found product-market fit and launched a company.

- **The pivot:** nurses loved a wireless pulse oximeter, but hospital administrators wouldn't pay for it. The lesson: your **user is not always your customer**. The team moved to an **infant monitor for parents at home**.
- **Market risk tested first:**
  - A smoke-and-mirrors video and website drew 500+ emails and interest from 15 distributors, for $220 in two weeks.
  - A/B-tested "reserve" prices found the profit-maximising price of $299.
  - Lesson: surveys mislead if worded badly. "What would you expect to pay?" and "what's the most you'd pay?" give very different answers.
- **Feasibility tested next:** wireless transmission, then pulse oximetry, which led to a switch to a sock design.
- **Regulation found late:** FDA clearance turned out to be a big viability risk. The team launched a non-alarm "health tracker" first to avoid it, and discovered a separate customer segment in the process.
- **Results (from the slides):**
  - Released as the "Dream Sock" and eventually granted full FDA approval.
  - Became the top product in Target's entire Baby category.
  - Expanded into a portfolio of monitoring products.
- **Jon's take:** these were *discovery* pivots, not vision pivots. Six months is fast for something the founders would spend 10–15 years on. In mature companies, leaders already know most of the problems, so teams do mostly solution discovery.

### Discovery is not a process

The SVPG taxonomy of techniques:

1. Framing the problem
2. Discovery ideation
3. Discovery prototyping
4. Evaluating usability and value
5. Evaluating feasibility and viability

It's a **toolkit to inform your judgement**, like a set of golf clubs. Right-size discovery based on:

- **The risks:** start with the risk that worries you most. A usability test won't answer a value question.
- **The necessary level of confidence:** if risk is low and the decision is easy to reverse, put it straight on the delivery backlog. When risk is higher, trade time for confidence.
- **The type of product work:** a small optimisation, a new product or market, and platform work all need different amounts.
- **The necessary level of description:** **give engineers the prototype first**, then ask "what else do you need?"

### Framing techniques (clarifying the problem)

**1. Team objective.** Answer three questions, and talk about them at Monday stand-up:

- **What problem are we solving?** (the objective)
- **Who are we solving it for?** (the target market)
- **How will we know we've succeeded?** (the key results)

**2. PR/FAQ ("working backwards", Amazon):**

- A **fake press release** written from the customer's perspective. It forces you to think about benefits, not a laundry list of features, and includes a made-up customer quote.
- Plus **FAQs** that anticipate stakeholders' hardest questions.
- It also helps you think about go-to-market.

**3. Written narrative:**

- About 2 pages of **data-driven argument**, followed by **FAQs**: the reasons the recommendation could fail, each with a mitigation. Jon finds it more useful than PowerPoint.
- **Why it works:** writing exposes gaps quickly ("books are machines for thinking"). It builds a culture where people do their homework, and it suits anyone with imposter syndrome.
- **Who reads it first:** your **own team**, then your boss, VP and board. Never the other way round.
- **Make time to think:** strong discovery needs about 4 hours a day of focused work. Use airplane mode.
- **Use it for larger items only.** It works well for the product vision and the product strategy.
- **When you don't have the data yet,** say so up front and argue that the data-gathering work is worth the time.

**4. Product canvas (startup canvas):**

- For **all-new products or true startups**, where there's risk everywhere.
- It maps your hypotheses about product-market fit, costs, go-to-market and target market.
- Don't use it for everything.

### Customer discovery program (for enterprise / B2B)

**Definition:** discovering and developing a set of **reference customers** in parallel with discovering and delivering the product. This is one of the most powerful enterprise techniques.

> "No facts exist inside the building, only opinions." (Steve Blank, *Four Steps to the Epiphany*)

- Blank credits this technique for the success of all four of his companies.
- Jon recommends Cindy Alvarez's more readable book on the same ideas.
- It won't guarantee a home run, but it tells you early if you're going to strike out. It's not for small features.

**Who to recruit:** **early evangelists** from the adoption curve, not technologists. You want people who really need the solution. If you can't find them, the problem may not be worth solving.

**A reference customer:**

- has **bought the product** (no side deals, because side deals become the launch price)
- is **running it in production**
- **loves it enough to tell the world**

**How it works:**

- Choose **a single customer segment**. This is hard for CEOs who want the whole world.
- Recruit **6–8 reference customers**. Microsoft learned you need at least six.
- Engage deeply: access to their offices, and prototypes tested again and again.
- Include the **PM and tech lead**; Palantir made "forward-deployed engineers" famous.
- Find **one solution all six love**. You're not building six custom solutions. If one customer needs something different, that's custom work, and taking it is a business decision.
- **Product/market fit is the smallest possible product.** Six paying customers who are public references may be the best pre-launch definition of product-market fit in B2B.
- **Bonus:** sales can stop pushing one-off feature requests, and sales and biz dev learn how good product work happens.

**Without references,** sales gets pulled into special deals, and the PM ends up asking "when did we become a sales-driven company?"

**Case studies:**

- **Snagajob:**
  - Customers suddenly needed to replace thousands of hourly workers after US employment eligibility rules tightened.
  - Snagajob chose six reference customers from retail employers with large or seasonal hiring needs, such as McDonald's, Starbucks, LAX, Macy's and Nordstrom.
  - The result was "mass staffing at scale".
- **OpenTable:**
  - Target segment: struggling single-site fine-dining restaurants in the US.
  - Used the technique to fill empty seats and complete the marketplace.
  - The founders credit it with getting them through the dot-com crash.
- **Apple retail tools:**
  - A PM chose six stores as internal reference customers for new Genius back-room tooling, which became the new tool suite.
  - The store managers became internal evangelists.
- **Gyms (slide only):**
  - When the pandemic shut down gyms, the urgent problem was finding alternatives.
  - The company doubled its clients and doubled its revenue.

---

## Wrap-up, homework and Day 3

**Homework:**

- Complete **Part B** of the AI Product Coach guide (vision, strategy, topology and OKRs; steps B1–B4). Stay in the same chat as Part A; it takes about 30 minutes.
- Remember your **Team Objectives breakout room number**. That's your Day 3 team.
- Check that your **prototyping tool** still works.
- Read the four Trainline problems below.

**The Trainline problems for Day 3** (each team picks one):

1. **At booking:** "When I book, I can't tell if a connection is realistic for me: kids, luggage, a station I've never seen."
2. **On the train:** "My first train is late and nobody tells me if I'll make my connection."
3. **During disruption:** "When something goes wrong I don't trust the app. I check National Rail and the departure board."
4. **Missed connection:** "I missed it. Now I'm at a foreign ticket desk working out what I'm allowed to do."

**Day 3:**

- **Session 1:** discovery ideation and prototyping, covering the four types of prototype, with live prototyping.
- **Session 2:** testing, simulated because there are no real users.
- **Session 3:** the practicum, where your team iterates its prototype.
- Keep your AI coach and prototyping tool open.
