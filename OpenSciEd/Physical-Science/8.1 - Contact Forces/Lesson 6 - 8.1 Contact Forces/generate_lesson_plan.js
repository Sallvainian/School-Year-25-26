const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        AlignmentType, HeadingLevel, BorderStyle, WidthType, LevelFormat,
        ShadingType, VerticalAlign, PageBreak } = require('docx');
const fs = require('fs');

const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 24 } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal",
        run: { size: 48, bold: true, color: "1E3A5F", font: "Arial" },
        paragraph: { spacing: { before: 240, after: 120 }, alignment: AlignmentType.CENTER } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, color: "2E5984", font: "Arial" },
        paragraph: { spacing: { before: 360, after: 240 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, color: "3D7AB8", font: "Arial" },
        paragraph: { spacing: { before: 280, after: 180 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, color: "4A90E2", font: "Arial" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 2 } }
    ]
  },
  numbering: {
    config: [
      { reference: "objectives",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "bullet-list",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "bullet-list2",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "bullet-list3",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "bullet-list4",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "questions",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
    ]
  },
  sections: [{
    properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    children: [
      // Title
      new Paragraph({ heading: HeadingLevel.TITLE,
        children: [new TextRun("LESSON PLAN")] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 480 },
        children: [new TextRun({ text: "OpenSciEd 8.1 Contact Forces - Lesson 6", size: 32, color: "666666" })] }),

      // Lesson Header Table
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Lesson Information")] }),
      new Table({
        columnWidths: [3600, 6000],
        margins: { top: 100, bottom: 100, left: 180, right: 180 },
        rows: [
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, shading: { fill: "E8F4F8", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Lesson Title", bold: true })] })] }),
            new TableCell({ borders: cellBorders,
              children: [new Paragraph({ children: [new TextRun("What have we figured out about objects interacting in collisions? How can we apply our new learning?")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, shading: { fill: "E8F4F8", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Subject Area", bold: true })] })] }),
            new TableCell({ borders: cellBorders,
              children: [new Paragraph({ children: [new TextRun("Physical Science - Forces and Motion")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, shading: { fill: "E8F4F8", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Grade Level", bold: true })] })] }),
            new TableCell({ borders: cellBorders,
              children: [new Paragraph({ children: [new TextRun("Middle School (Grades 6-8)")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, shading: { fill: "E8F4F8", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Duration", bold: true })] })] }),
            new TableCell({ borders: cellBorders,
              children: [new Paragraph({ children: [new TextRun("1 class period (45-50 minutes)")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, shading: { fill: "E8F4F8", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Unit", bold: true })] })] }),
            new TableCell({ borders: cellBorders,
              children: [new Paragraph({ children: [new TextRun("8.1 Contact Forces (Lesson 6 of Unit)")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, shading: { fill: "E8F4F8", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Prerequisites", bold: true })] })] }),
            new TableCell({ borders: cellBorders,
              children: [new Paragraph({ children: [new TextRun("Completion of Lessons 1-5: Understanding of peak forces, elastic limits, energy transfer in collisions, and Newton's Third Law")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, shading: { fill: "E8F4F8", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "NGSS Standards", bold: true })] })] }),
            new TableCell({ borders: cellBorders,
              children: [new Paragraph({ children: [new TextRun("MS-PS2-1, MS-PS2-2, MS-PS3-1, MS-ETS1-2, MS-ETS1-3, MS-LS1-8")] })] })
          ]})
        ]
      }),

      // Learning Objectives
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Learning Objectives")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("By the end of this lesson, students will be able to:")] }),

      new Paragraph({ numbering: { reference: "objectives", level: 0 },
        children: [new TextRun({ text: "Recall ", bold: true }), new TextRun("key discoveries about forces, energy transfer, and elastic limits from previous lessons by contributing to a class summary poster. (Remember)")] }),
      new Paragraph({ numbering: { reference: "objectives", level: 0 },
        children: [new TextRun({ text: "Identify ", bold: true }), new TextRun("at least three questions from the Driving Question Board that can now be answered using evidence from prior investigations. (Understand)")] }),
      new Paragraph({ numbering: { reference: "objectives", level: 0 },
        children: [new TextRun({ text: "Explain ", bold: true }), new TextRun("how peak forces and energy transfer in collisions relate to specific questions about real-world phenomena. (Understand)")] }),
      new Paragraph({ numbering: { reference: "objectives", level: 0 },
        children: [new TextRun({ text: "Apply ", bold: true }), new TextRun("science ideas about forces and energy to construct explanations for how soccer collisions can cause concussions. (Apply)")] }),
      new Paragraph({ numbering: { reference: "objectives", level: 0 },
        children: [new TextRun({ text: "Analyze ", bold: true }), new TextRun("the relationship between mass, speed, kinetic energy, and peak forces to predict which factor contributes more to damage in collisions. (Analyze)")] }),
      new Paragraph({ numbering: { reference: "objectives", level: 0 },
        children: [new TextRun({ text: "Construct ", bold: true }), new TextRun("evidence-based arguments citing data from past investigations to support explanations about collision phenomena. (Evaluate)")] }),

      // Materials
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Materials and Resources")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Per Student")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Science notebook")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Reviewing Our Driving Question Board handout")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Soccer Assessment")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Driving Question Board question list (from Lesson 1)")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Per Class")] }),
      new Paragraph({ numbering: { reference: "bullet-list2", level: 0 }, children: [new TextRun("What We Have Discovered poster (chart paper)")] }),
      new Paragraph({ numbering: { reference: "bullet-list2", level: 0 }, children: [new TextRun("Markers")] }),
      new Paragraph({ numbering: { reference: "bullet-list2", level: 0 }, children: [new TextRun("Projector and slides (Slides A-E)")] }),
      new Paragraph({ numbering: { reference: "bullet-list2", level: 0 }, children: [new TextRun("Class Driving Question Board")] }),

      new Paragraph({ children: [new PageBreak()] }),

      // Content Outline
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Content Outline")] }),

      // Segment 1
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Segment 1: Navigation - Recap Our Learning (8 minutes)")] }),
      new Paragraph({ children: [new TextRun({ text: "Key Concepts:", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullet-list3", level: 0 }, children: [new TextRun("Peak forces are equal on each object during collision (Newton's Third Law)")] }),
      new Paragraph({ numbering: { reference: "bullet-list3", level: 0 }, children: [new TextRun("Energy transfer occurs during collisions and can cause deformation")] }),
      new Paragraph({ numbering: { reference: "bullet-list3", level: 0 }, children: [new TextRun("Elastic limits determine if objects return to original shape or reach breaking point")] }),
      new Paragraph({ numbering: { reference: "bullet-list3", level: 0 }, children: [new TextRun("Kinetic energy increases with speed or mass affect peak forces")] }),
      new Paragraph({ children: [new TextRun({ text: "Teaching Approach: ", bold: true }), new TextRun("Collaborative class discussion with visual recording on poster")] }),
      new Paragraph({ children: [new TextRun({ text: "Transition: ", bold: true }), new TextRun("\"We have figured out a lot! Let's see if we can answer some of our original questions.\"")] }),

      // Segment 2
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Segment 2: Driving Question Board Check-in (12 minutes)")] }),
      new Paragraph({ children: [new TextRun({ text: "Key Concepts:", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Application of learned concepts to original questions")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Evidence-based reasoning using investigation data")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Identification of remaining questions about mass and speed")] }),
      new Paragraph({ children: [new TextRun({ text: "Teaching Approach: ", bold: true }), new TextRun("Partner work followed by whole-group debrief")] }),
      new Paragraph({ children: [new TextRun({ text: "Transition: ", bold: true }), new TextRun("\"Before investigating remaining questions, let's apply our learning to a new phenomenon.\"")] }),

      // Segment 3
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Segment 3: Soccer Assessment (20 minutes)")] }),
      new Paragraph({ children: [new TextRun({ text: "Key Concepts:", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Application of force and energy concepts to soccer collisions")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Connection between peak forces and concussion injuries")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Headers in soccer as potential cause of brain injury")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Mass vs. speed effects on kinetic energy (formative)")] }),
      new Paragraph({ children: [new TextRun({ text: "Teaching Approach: ", bold: true }), new TextRun("Individual assessment with teacher introduction")] }),
      new Paragraph({ children: [new TextRun({ text: "Transition: ", bold: true }), new TextRun("\"Let's discuss our ideas about which factor—mass or speed—has a bigger impact.\"")] }),

      // Segment 4
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Segment 4: Whole-Group Discussion (5 minutes)")] }),
      new Paragraph({ children: [new TextRun({ text: "Key Concepts:", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullet-list2", level: 0 }, children: [new TextRun("Comparing effects of doubling mass vs. doubling speed")] }),
      new Paragraph({ numbering: { reference: "bullet-list2", level: 0 }, children: [new TextRun("Kinetic energy relationships (preparing for Lesson 7)")] }),
      new Paragraph({ numbering: { reference: "bullet-list2", level: 0 }, children: [new TextRun("Generating questions for next investigation")] }),
      new Paragraph({ children: [new TextRun({ text: "Teaching Approach: ", bold: true }), new TextRun("Socratic discussion with argumentation from evidence")] }),

      new Paragraph({ children: [new PageBreak()] }),

      // Lesson Procedure
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Detailed Lesson Procedure")] }),

      // Opening
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Opening/Hook (8 minutes) - Slide A")] }),
      new Paragraph({ children: [new TextRun({ text: "Teacher Script: ", bold: true, italics: true })] }),
      new Paragraph({ indent: { left: 360 }, children: [new TextRun({ text: "\"Last class we figured out that the peak forces are equal on each cart during a collision, regardless of the mass or speed of the individual carts. It's always an equal force, but in an opposite direction. We have also figured out a lot of other important ideas along the way! Let's look back and see what we have learned so far.\"", italics: true })] }),

      new Paragraph({ spacing: { before: 200 }, children: [new TextRun({ text: "Activity:", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullet-list3", level: 0 }, children: [new TextRun("Direct students to review their Progress Trackers")] }),
      new Paragraph({ numbering: { reference: "bullet-list3", level: 0 }, children: [new TextRun("Display \"What We Have Discovered\" poster")] }),
      new Paragraph({ numbering: { reference: "bullet-list3", level: 0 }, children: [new TextRun("Record student responses on chart paper")] }),

      new Paragraph({ spacing: { before: 200 }, children: [new TextRun({ text: "Expected Student Responses:", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Objects can be damaged or remain undamaged in collisions")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("All objects have an elastic limit")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Energy is transferred in collisions")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Contact forces cause shape changes")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Forces are equal but opposite during collision")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Peak force > elastic limit = breaking point")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Increased kinetic energy increases peak forces")] }),

      // Guided Practice
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Guided Practice (12 minutes) - Slides B-C")] }),
      new Paragraph({ children: [new TextRun({ text: "Partner Work (10 minutes):", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Distribute Driving Question Board typed questions list")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Distribute \"Reviewing Our Driving Question Board\" handout")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Students identify at least 3 questions they can now answer")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Students select ONE question to answer with evidence")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Circulate and use questioning to ensure evidence-based responses")] }),

      new Paragraph({ spacing: { before: 200 }, children: [new TextRun({ text: "Facilitation Questions:", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullet-list2", level: 0 }, children: [new TextRun("\"What evidence do we have from past investigations that supports your answer?\"")] }),
      new Paragraph({ numbering: { reference: "bullet-list2", level: 0 }, children: [new TextRun("\"What patterns in data support your answer?\"")] }),
      new Paragraph({ numbering: { reference: "bullet-list2", level: 0 }, children: [new TextRun("\"Is there anything on our What We Have Discovered poster that helps?\"")] }),

      new Paragraph({ spacing: { before: 200 }, children: [new TextRun({ text: "Whole-Class Debrief (2 minutes):", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullet-list3", level: 0 }, children: [new TextRun("How many can now answer a question we couldn't before?")] }),
      new Paragraph({ numbering: { reference: "bullet-list3", level: 0 }, children: [new TextRun("What questions do you feel comfortable answering?")] }),
      new Paragraph({ numbering: { reference: "bullet-list3", level: 0 }, children: [new TextRun("Were there questions about mass and speed we couldn't answer?")] }),

      // Independent Practice
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Independent Practice (20 minutes) - Slide D")] }),
      new Paragraph({ children: [new TextRun({ text: "Introduction (5 minutes):", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Introduce soccer headers scenario")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Ask: \"Why might concussions be dangerous?\"")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Distribute Soccer Assessment")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Read questions 1-5 together (summative)")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Read questions 6-7 (formative - best guesses)")] }),

      new Paragraph({ spacing: { before: 200 }, children: [new TextRun({ text: "Assessment Time (15 minutes):", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Students complete assessment independently")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Collect assessments when finished")] }),

      // Closure
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Closure (5 minutes) - Slide E")] }),
      new Paragraph({ children: [new TextRun({ text: "Discussion Questions:", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullet-list2", level: 0 }, children: [new TextRun("\"If we compare one cart with double the mass vs. one cart with double the speed, would one have more kinetic energy?\"")] }),
      new Paragraph({ numbering: { reference: "bullet-list2", level: 0 }, children: [new TextRun("\"What do you think is a bigger factor contributing to damage: speed or mass of objects? Why?\"")] }),

      new Paragraph({ spacing: { before: 200 }, children: [new TextRun({ text: "Purpose: ", bold: true }), new TextRun("Generate questions for Lesson 7 investigation. Accept all responses - these are formative and will be investigated next class.")] }),

      new Paragraph({ children: [new PageBreak()] }),

      // Assessment Quiz
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Assessment Components")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Summative Assessment (Questions 1-5 of Soccer Assessment)")] }),
      new Paragraph({ children: [new TextRun({ text: "Target Performance Expectation:", bold: true })] }),
      new Paragraph({ indent: { left: 360 }, children: [new TextRun("6.A Apply science ideas and use evidence to construct an explanation for how the amounts of peak force and energy transfer (cause) in soccer collisions result in instability in the brain (concussions, effect) due to sudden changes at the cellular level.")] }),

      new Paragraph({ spacing: { before: 200 }, children: [new TextRun({ text: "Key DCI Being Assessed:", bold: true })] }),
      new Paragraph({ indent: { left: 360 }, children: [new TextRun("PS2.A: For any pair of interacting objects, the force exerted by the first object on the second object is equal in strength to the force that the second object exerts on the first, but in the opposite direction. The greater the mass of the object, the greater the force needed to achieve the same change in motion.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Formative Assessment (Questions 6-7)")] }),
      new Paragraph({ children: [new TextRun("These questions gauge student understanding of mass vs. speed effects on kinetic energy and will inform Lesson 7 investigation planning.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Informal Assessment Opportunities")] }),
      new Paragraph({ numbering: { reference: "bullet-list3", level: 0 }, children: [new TextRun("What We Have Discovered poster contributions")] }),
      new Paragraph({ numbering: { reference: "bullet-list3", level: 0 }, children: [new TextRun("Reviewing Our Driving Question Board written responses")] }),
      new Paragraph({ numbering: { reference: "bullet-list3", level: 0 }, children: [new TextRun("Partner discussions during DQB activity")] }),
      new Paragraph({ numbering: { reference: "bullet-list3", level: 0 }, children: [new TextRun("Whole-group discussion participation")] }),

      new Paragraph({ children: [new PageBreak()] }),

      // Instructor Notes
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Instructor Notes")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Preparation Checklist (20 minutes)")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Review teacher guide, slides, and assessment key")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Make copies of handouts (Reviewing Our Driving Question Board, Soccer Assessment)")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Create typed list of all DQB questions from Lesson 1")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Create \"What We Have Discovered\" poster on chart paper")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Replace slide B example DQB image with actual class DQB photo")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Have markers ready for poster recording")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Common Misconceptions")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Misconception: ", bold: true }), new TextRun("Heavier objects exert more force in collisions")] }),
      new Paragraph({ indent: { left: 720 }, children: [new TextRun({ text: "Correction: ", italics: true }), new TextRun("Forces are always equal and opposite regardless of mass (Newton's Third Law)")] }),

      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Misconception: ", bold: true }), new TextRun("Mass and speed have equal effects on kinetic energy")] }),
      new Paragraph({ indent: { left: 720 }, children: [new TextRun({ text: "Note: ", italics: true }), new TextRun("Don't correct this yet - will be investigated in Lesson 7")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Differentiation Strategies")] }),

      new Paragraph({ children: [new TextRun({ text: "For Struggling Learners:", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullet-list2", level: 0 }, children: [new TextRun("Allow drawing/modeling answers instead of writing")] }),
      new Paragraph({ numbering: { reference: "bullet-list2", level: 0 }, children: [new TextRun("Direct to What We Have Discovered poster for support")] }),
      new Paragraph({ numbering: { reference: "bullet-list2", level: 0 }, children: [new TextRun("Help narrow focus: \"Is your question about forces, system parts, or energy transfer?\"")] }),
      new Paragraph({ numbering: { reference: "bullet-list2", level: 0 }, children: [new TextRun("Provide sentence starters for written responses")] }),

      new Paragraph({ children: [new TextRun({ text: "For Advanced Learners:", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullet-list3", level: 0 }, children: [new TextRun("Encourage answering multiple DQB questions")] }),
      new Paragraph({ numbering: { reference: "bullet-list3", level: 0 }, children: [new TextRun("Ask them to identify patterns across investigations")] }),
      new Paragraph({ numbering: { reference: "bullet-list3", level: 0 }, children: [new TextRun("Challenge to predict Lesson 7 outcomes")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Assessment Guidance")] }),
      new Paragraph({ children: [new TextRun({ text: "Questions 1-5: ", bold: true }), new TextRun("Summative - assess mastery of forces, energy transfer, and Newton's Third Law")] }),
      new Paragraph({ children: [new TextRun({ text: "Questions 6-7: ", bold: true }), new TextRun("Formative - do NOT grade. These reveal current thinking and set up Lesson 7")] }),
      new Paragraph({ children: [new TextRun({ text: "Save DQB lists: ", bold: true }), new TextRun("Collect and store for reuse in later lessons")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Where We Are Going and NOT Going")] }),
      new Paragraph({ children: [new TextRun({ text: "Going: ", bold: true }), new TextRun("Students apply ideas to answer DQB questions and soccer scenario. Focus on PS2.A and energy transfer causing damage.")] }),
      new Paragraph({ children: [new TextRun({ text: "NOT Going: ", bold: true }), new TextRun("Quantitative effects of mass vs. speed on kinetic energy (addressed in Lesson 7). Brain structures beyond axons not discussed.")] }),

      new Paragraph({ children: [new PageBreak()] }),

      // Resources
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Resources and References")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("OpenSciEd Materials")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("8.1 Lesson 6 Slides (Slides A-E)")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("8.1 Lesson 6 Teacher Edition")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Reviewing Our Driving Question Board handout")] }),
      new Paragraph({ numbering: { reference: "bullet-list4", level: 0 }, children: [new TextRun("Soccer Assessment (with answer key)")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Standards Alignment")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "MS-PS2-1: ", bold: true }), new TextRun("Apply Newton's Third Law to design a solution to a problem involving the motion of two colliding objects")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "MS-PS2-2: ", bold: true }), new TextRun("Plan an investigation to provide evidence that the change in an object's motion depends on the sum of the forces on the object and the mass of the object")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "MS-PS3-1: ", bold: true }), new TextRun("Construct and interpret graphical displays of data to describe the relationships of kinetic energy to the mass of an object and to the speed of an object")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Science and Engineering Practices")] }),
      new Paragraph({ numbering: { reference: "bullet-list2", level: 0 }, children: [new TextRun("Asking Questions and Defining Problems")] }),
      new Paragraph({ numbering: { reference: "bullet-list2", level: 0 }, children: [new TextRun("Constructing Explanations and Designing Solutions")] }),
      new Paragraph({ numbering: { reference: "bullet-list2", level: 0 }, children: [new TextRun("Engaging in Argument from Evidence")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Crosscutting Concepts")] }),
      new Paragraph({ numbering: { reference: "bullet-list3", level: 0 }, children: [new TextRun("Cause and Effect")] }),
      new Paragraph({ numbering: { reference: "bullet-list3", level: 0 }, children: [new TextRun("Systems and System Models")] }),
      new Paragraph({ numbering: { reference: "bullet-list3", level: 0 }, children: [new TextRun("Energy and Matter")] }),

      // Footer
      new Paragraph({ spacing: { before: 720 }, alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Generated from OpenSciEd 8.1 Contact Forces Unit Materials", size: 20, color: "888888", italics: true })] }),
      new Paragraph({ alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), size: 20, color: "888888" })] })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("Lesson_6_Contact_Forces_Plan.docx", buffer);
  console.log("Lesson plan created: Lesson_6_Contact_Forces_Plan.docx");
}).catch(err => console.error("Error:", err));
