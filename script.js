let currentLang = "fr";
// DARK MODE
function toggleDark(){document.body.classList.toggle("dark")}

//translation
const t={
en:{nav:["Home","About Us","Projects","Our Partners","Contact","Our Story"],
  support:"Donate Now ✨",
  heroT:"Avec Human Supporters",
  heroD:"We connect volunteers with meaningful projects.",
  cards:[["Popular Education & Non Formal Education ","Popular education is an approach that aims to make learning accessible to everyone, outside the formal frameworks of traditional education. It emphasizes active participation, empowerment, cooperation, and critical development. It often relies on participatory methods, workshops, and debates, and it targets a wide audience, often connected to social, cultural, or political issues."],
  ["Human Rights & Social Justice",`Educational support for children aged 7–9, at-risk children, school dropouts, and literacy programmes for women, ensuring equal access to education and learning opportunities.`],
  ["Mediterranean & European Transcultural","This area includes all initiatives that promote intercultural dialogue, cross-border cooperation, international solidarity, and exchange between France, Europe, and Mediterranean partners."]],
  footerContactTitle:"Contact Info",
  title:"Write your message here...",
  name: "Enter your name",
  btnv:"Info ▾",
  fbtnv:"Info ▾",
  email: "Enter your email",
  message: "Enter your message",
  button: "Send Message",
  footerEmail:"avechsa@gmail.com",
  footerPhone:"+33 0749749261",
  storytitle:"Our Story:",
  storytext:`AVEC Human Supporters was established in February 2013. From the beginning, the association aimed to support education, culture, and human values through international cooperation.

Its first major action was the ARASICOD grant, funded by the Regional Council of Pays de la Loire. This grant supported a three-year education project implemented in Palestine, in cooperation with the Human Supporters Association. The project focused on supporting educational activities and building strong, long-term cooperation between local and international partners.

As part of its commitment to cultural exchange and awareness, AVEC Human Supporters organized a Festival for Palestine in Nantes, France. The festival aimed to raise public awareness about Palestine and to promote cultural solidarity through art, dialogue, and community participation.

The association also developed several youth exchange projects between Palestine and France. These projects created spaces for young people to meet, share experiences, and better understand each other’s cultures and realities.

Over the years, AVEC Human Supporters carried out many other initiatives, including the Amal Project, different dance projects, and the Festiclown Project. Through Festiclown, clowns from different countries were invited to Palestine to work in schools and to lead artistic and educational workshops with children and youth. These projects used art, movement, and play as tools for expression, learning, and emotional support.

Throughout its journey, AVEC Human Supporters has cooperated with many institutions and built strong partnerships, especially with CEMEA and the Human Supporters Association. These partnerships have helped ensure sustainable cooperation and the successful implementation of joint projects.

Since 2023, the association’s work has grown and become more impactful at the local level in France. AVEC Human Supporters decided to focus more on public education

During this phase, the association conducted research on how to combine public education and art. The objective was to create new learning methods and to develop an innovative approach linked to psychological healing, based on understanding body movement and physical expression.

The association believes that the body carries stories, emotions, and memories, and that movement can be a powerful tool for expression and healing.

An important step in this process was the implementation of a project in partnership with CEMEA and the Municipality of Rezé, through the hosting Neaji islam . This project strengthened the link between artistic practice, Non formel education, and community work, and helped build strong relationships with local actors.

Today, AVEC Human Supporters aims to further develop its work at both the local and international levels. The association seeks to build trusted partnerships that share its values, work toward social justice, and support new ideas and emerging projects. AVEC Human Supporters sees its work as a living and evolving process, growing with people, communities, and shared experiences.`,
  footerAddress:"102 Rue Saint-Jacques 44200 Nantes - France",
  learnMore: "Read More",
  showLess: "Hide",
  aboutTitle:"About Us :" ,
  aboutText:"Avec Human Supporters is a non-profit, humanitarian, and solidarity-based association committed to the defense of human rights, the promotion of international law, and the fight against all forms of discrimination. We believe in equality between peoples and individuals, and we work to promote tolerance, mutual respect, and social justice in order to build a more inclusive and supportive society. Our association is actively engaged in humanitarian aid, development support, and the promotion of volunteerism. We design and implement projects that empower individuals and communities through psycho-educational, environmental, artistic, cultural, and media-based initiatives, without geographical restrictions. A core part of our mission is to raise awareness and amplify voices that are often marginalized. In this context, Avec Human Supporters is deeply committed to sharing news, stories, and cultural expressions from all over the World, contributing to a better understanding of their realities, heritage, and resilience. Through collective action, partnerships, and civic engagement, we aim to support human dignity, encourage active citizenship, and foster meaningful solidarity across borders.",
  metaTitle:"Statement on Our Digital Responsibility and Environmental Commitment",
  metaText:`We do not use Meta platforms. Our official news is published exclusively on our website, in line with our commitment to digital responsibility and environmental respect.
This statement reflects a conscious and ethical position that guides our communication practices and our relationship with the digital world.

Why We Do Not Repost Content Across Multiple Platforms
In today’s digital landscape, information is often duplicated and redistributed across numerous platforms. While this practice increases visibility, it also significantly increases digital resource consumption. Every repost, share, and duplicate publication requires: - Additional server storage - Increased data transfer - Continuous processing and backup systems
This repetition multiplies the environmental cost of a single piece of information.
We have chosen a different path: publishing once, responsibly, on a platform we control and maintain with intention.

The Environmental Cost of Digital Energy
Digital services are not immaterial. Behind every website, platform, and social network lies a vast infrastructure of: - Data centers - High-capacity servers - Continuous electricity consumption
These infrastructures operate 24/7 and require massive amounts of energy to function reliably.
A critical and often overlooked aspect of this system is cooling. To prevent overheating, data centers rely heavily on cooling mechanisms, many of which depend on water-based cooling systems.
Large quantities of water are used to cool servers, and much of this water is lost through evaporation. This process contributes to: - Water waste - Increased pressure on local water resources - Long-term ecological imbalance

Digital Sobriety as an Ethical Choice
Our decision aligns with the principle of digital sobriety—a conscious reduction of unnecessary digital consumption. For us, this means: - Limiting duplication of content - Reducing dependence on extractive digital platforms - Prioritizing quality, depth, and intention over constant visibility
We believe that responsible communication is not about being everywhere, but about being coherent, accessible, and respectful.

Our Responsibility Toward the Environment
Respecting the environment also means questioning invisible systems that consume natural resources in silence. Electricity, servers, and water are not abstract concepts; they are finite resources with real ecological consequences.
By centralizing our communication on our official website, we aim to: - Reduce our digital footprint - Limit unnecessary energy consumption - Act in alignment with our environmental values
This choice may reduce our presence on mainstream platforms, but it strengthens the integrity of our actions.

A Conscious and Transparent Position
We understand that this decision may come with challenges, including reduced reach or visibility. However, we believe that ecological responsibility requires consistency, even when it demands restraint.
Our website remains the sole official source of our news, activities, and positions. We invite readers, partners, and supporters to engage with us directly through this space.
Choosing not to multiply information is, for us, a form of respect—toward our audience, our values, and our shared environment.

Publishing less, but with meaning. Communicating responsibly, with awareness.`,
hrsjtitle:"Human Rights & Social Justice\n",
hrsjtext:`This area includes all actions aimed at promoting equality, inclusion, dignity, and the protection of vulnerable groups, while raising awareness of human rights and social justice issues.
\nAwareness, Education & Sensitisation in France
Public talks, exhibitions, and community gatherings addressing human rights, social justice, gender equality, psychosocial wellbeing, and anti-discrimination.
\nEducation Project for Children and Women
Educational support for children aged 7–9, at-risk children, school dropouts, and literacy programmes for women, ensuring equal access to education and learning opportunities.
\nWomen’s Club Activities
Educational, awareness-raising, and psychosocial activities focused on self-care, positive parenting, family wellbeing, and women’s empowerment.
\nGlobal Goals World Cup Project for Women and Girls
Awareness-raising on the Sustainable Development Goals (SDGs), promoting gender equality, civic participation, and community-based action through education and sport.
\nYouth Workshops on Psychological Support and Career Skills
Capacity-building workshops supporting mental wellbeing, resilience, employability, and social inclusion of young people.`,
nfetittle:"Non-Formal Education & Popular Education\n",
nfetext:`This area covers educational approaches based on participatory, experiential, and creative learning, supporting personal development, social skills, and lifelong learning outside formal education systems.
\nActivities and Projects under this aim:
\nNon-Formal Educational Programmes in France
Educational and cultural activities using non-formal methodologies, including discussions, creative workshops, and community learning spaces.
\nHands in Clay Project
Art-based learning through clay and ceramics workshops, encouraging creativity, self-expression, practical skills, and learning by doing.
\nSummer and Winter Camps for Children
Structured educational, recreational, and social programmes providing safe learning environments for children.
\nSummer Activities for Children and Youth
Educational, creative, and recreational sessions supporting social development and wellbeing during school holidays.
\nYouth Workshops on Psychological Support and Career Skills
(Educational component) Skills development through participatory workshops on life skills, career planning, and personal development.`,
tctittle:"  Transcultural & International Projects\n",
tctext:`This area includes all initiatives that promote intercultural dialogue, cross-border cooperation, international solidarity, and exchange between France, Europe, and Mediterranean partners.
\nActivities and Projects under this aim:
\nInternational Partnerships & Exchange
Facilitating cooperation between French organisations, volunteers, local authorities, and Mediterranean partners through joint seminars, training sessions, and collaborative projects.
\nYouth Exchange Project (European Solidarity Corps)
Hosting French volunteers in Nablus within structured intercultural learning programmes, promoting mutual understanding, solidarity, and civic engagement.
\nSolidarity & Fundraising Activities
Mobilising French civil society to support educational and psychosocial programmes and strengthen international solidarity initiatives.
\nCross-cultural Awareness Activities Related to Nablus
Cultural exchange, storytelling, and information-sharing initiatives connecting French audiences with Palestinian communities.`,
question:`Popular education at the heart of our association `,
qtext:`Popular education is an approach that aims to make learning accessible toeveryone, outside the formal frameworks of traditional education. It emphasizes active participation, empowerment, cooperation, and the development of critical
thinking. It is often based on participatory methods such as workshops, discussions, and collective practices, and it addresses a wide audience, often in connection with
social, cultural, or political issues. Within our association, we build strong connections between these principles and
hip-hop dance. From its origins, hip-hop has always promoted self-expression, self-confidence, and accessibility, outside the rigid norms of classical or academic dance forms. This inclusive dimension makes hip-hop a powerful tool to respond to the limitations of traditional education systems, which can sometimes negatively impact self-confidence.
By encouraging participants to step out of their comfort zones, express themselves freely through movement, and value their individuality, we support personal growth and the development of self-confidence. Since the launch of our project in 2022, we have been committed to developing and strengthening this initiative, with the goal of ensuring equal and inclusive access to hip-hop dance for all.`,
orgtyp:"Organization type : Non-Governemental Organization",
news:"⚠️We do not use Meta platforms .[Learn More]⚠️",
},
ar:{nav:["الرئيسية","من نحن","المشاريع","شركاؤنا","تواصل معنا","قصتنا"],
  support:"تبرع الآن",
  heroT:"أيدٍ متعاونة، عالم أفضل",
  heroD:"نربط المتطوعين بمشاريع تصنع فرقًا حقيقيًا.",
  cards:[["التربية الشعبية والتعليم","التربية الشعبية هي نهج يهدف إلى جعل التعلم متاحًا للجميع، خارج الأطر الرسمية للتعليم التقليدي. وهو يركز على المشاركة الفعّالة، وتمكين الأفراد، والتعاون، والتفكير النقدي. وغالبًا ما يعتمد على أساليب تشاركية، وورش عمل، ونقاشات، ويستهدف جمهورًا واسعًا، غالبًا مرتبطًا بالقضايا الاجتماعية أو الثقافية أو السياسية"],
  ["حقوق الإنسان والعدالة الاجتماعية","الدعم التعليمي للأطفال الذين تتراوح أعمارهم بين 7 و9 سنوات، والأطفال المعرّضين للخطر، والمتسربين من المدارس، وبرامج محو الأمية للنساء، مع ضمان تكافؤ فرص الوصول إلى التعليم وفرص التعلّم للجميع."],
  ["الأفق الثقافي الأوسط والثقافات الأوروبية المشتركة","يشمل هذا المجال جميع المبادرات التي تعزّز الحوار بين الثقافات، والتعاون عبر الحدود، والتضامن الدولي، والتبادل بين فرنسا وأوروبا وشركاء منطقة البحر الأبيض المتوسط."]],
  title: "أرسل لنا رسالة",
  name: "اكتب اسمك",
  email: "اكتب بريدك الإلكتروني",
  message: "اكتب رسالتك",
  button: "إرسال",
  orgtyp:"نوع المنظمة: منظمة غير حكومية",
  storytitle:"قصتنا:",
  question:"التربية الشعبية هي قلب جمعيتنا",
  qtext:`التربية الشعبية هي مقاربة تهدف إلى جعل التعلّم متاحًا للجميع، خارج الأطر الرسمية للتعليم التقليدي. وهي تقوم على تشجيع المشاركة الفعّالة، والتمكين، والتعاون، وتنمية التفكير النقدي. وغالبًا ما تعتمد على أساليب تشاركية مثل الورشات، والنقاشات، والممارسات الجماعية، وتوجَّه إلى جمهور واسع، غالبًا ما يكون ذلك في ارتباط مع قضايا اجتماعية أو ثقافية أو سياسية.

داخل جمعيتنا، نعمل على بناء روابط قوية بين هذه المبادئ ورقص الهيب هوب. فمنذ نشأته، لطالما شجّع الهيب هوب على التعبير عن الذات، وتعزيز الثقة بالنفس، وإتاحة الوصول للجميع، بعيدًا عن المعايير الصارمة للرقص الكلاسيكي أو الأكاديمي. هذا البعد الشمولي يجعل من الهيب هوب أداة قوية للاستجابة لحدود أنظمة التعليم التقليدية، التي قد تؤثر أحيانًا سلبًا على الثقة بالنفس.

من خلال تشجيع المشاركين على الخروج من منطقة الراحة الخاصة بهم، والتعبير بحرية من خلال الحركة، وتقدير فرادتهم الفردية، ندعم النمو الشخصي وتعزيز الثقة بالنفس. ومنذ إطلاق مشروعنا سنة 2022، نلتزم بتطوير هذه المبادرة وتعزيزها، بهدف ضمان وصول متكافئ وشامل إلى رقص الهيب هوب للجميع.`,
  storytext:`تأسست AVEC Human Supporters في فبراير 2013. منذ البداية، كان هدف الجمعية دعم التعليم والثقافة والقيم الإنسانية من خلال التعاون الدولي.

وكانت أولى المبادرات الكبرى للجمعية هي منحة ARASICOD، الممولة من المجلس الإقليمي لباي دو لا لوار. وقد دعمت هذه المنحة مشروعًا تعليميًا استمر ثلاث سنوات ونُفذ في فلسطين بالتعاون مع جمعية Human Supporters. ركز المشروع على دعم الأنشطة التعليمية وبناء تعاون طويل الأمد وقوي بين الشركاء المحليين والدوليين.

كجزء من التزامها بالتبادل الثقافي والتوعية، نظمت AVEC Human Supporters مهرجان فلسطين في نانت، فرنسا. هدف المهرجان إلى رفع مستوى الوعي العام حول فلسطين وتعزيز التضامن الثقافي من خلال الفن والحوار والمشاركة المجتمعية.

كما طورت الجمعية عدة مشاريع لتبادل الشباب بين فلسطين وفرنسا. وقد وفرت هذه المشاريع مساحات للشباب للالتقاء وتبادل الخبرات وفهم ثقافات وواقع بعضهم البعض بشكل أفضل.

على مر السنوات، نفذت AVEC Human Supporters العديد من المبادرات الأخرى، بما في ذلك مشروع الأمل ومشاريع الرقص المختلفة ومشروع Festiclown. من خلال Festiclown، تمت دعوة مهرجين من دول مختلفة إلى فلسطين للعمل في المدارس وقيادة ورش فنية وتعليمية للأطفال والشباب. استخدمت هذه المشاريع الفن والحركة واللعب كأدوات للتعبير والتعلم والدعم النفسي.

طوال مسيرتها، تعاونت AVEC Human Supporters مع العديد من المؤسسات وبنت شراكات قوية، خاصة مع CEMEA وجمعية Human Supporters. وقد ساعدت هذه الشراكات في ضمان التعاون المستدام وتنفيذ المشاريع المشتركة بنجاح.

منذ عام 2023، توسع عمل الجمعية وأصبح له تأثير أكبر على المستوى المحلي في فرنسا. قررت AVEC Human Supporters التركيز بشكل أكبر على التعليم العام.

خلال هذه المرحلة، أجرت الجمعية أبحاثًا حول كيفية دمج التعليم العام مع الفن. كان الهدف هو ابتكار طرق تعليمية جديدة وتطوير نهج مبتكر مرتبط بالشفاء النفسي، يعتمد على فهم حركة الجسم والتعبير الجسدي.

تؤمن الجمعية بأن الجسم يحمل القصص والعواطف والذكريات، وأن الحركة يمكن أن تكون أداة قوية للتعبير والشفاء.

وكانت خطوة مهمة في هذا المسار تنفيذ مشروع بالشراكة مع CEMEA وبلدية ريزيه، من خلال استضافة Neaji Islam. وقد عزز هذا المشروع العلاقة بين الممارسة الفنية والتعليم غير الرسمي والعمل المجتمعي وساهم في بناء علاقات قوية مع الفاعلين المحليين.

اليوم، تهدف AVEC Human Supporters إلى تطوير عملها أكثر على المستويين المحلي والدولي. وتسعى الجمعية لبناء شراكات موثوقة تشاركها قيمها، وتعمل من أجل العدالة الاجتماعية، وتدعم الأفكار الجديدة والمشاريع الناشئة. ترى AVEC Human Supporters عملها كعملية حية ومتطورة، تنمو مع الناس والمجتمعات والتجارب المشتركة.`,
  footerContactTitle:"معلومات التواصل",
  title:"أرسل لنا رسالة",
  footerEmail:"avechsa@gmail.com",
  footerPhone:"+33 0749749261",
  footerAddress:"102 Rue Saint-Jacques 44200 Nantes - France",
  learnMore: "اقرأ المزيد",
  showLess: "عرض أقل",
  aboutTitle:"من نحن",
  btnv:"▾معلومات",
  news:"نحن لا نستخدم منصات ميتا: تُنشر أخبارنا الرسمية حصريًا على موقعنا الإلكتروني، التزامًا منا بالمسؤولية الرقمية واحترام البيئة.",
  fbtnv:"▾معلومات",
  aboutText:`جمعية Avec Human Supporters هي جمعية غير ربحية، إنسانية، وقائمة على التضامن، ملتزمة بالدفاع عن حقوق الإنسان، وتعزيز القانون الدولي، ومكافحة جميع أشكال التمييز. نحن نؤمن بالمساواة بين الشعوب والأفراد، ونعمل على تعزيز التسامح والاحترام المتبادل والعدالة الاجتماعية لبناء مجتمع أكثر شمولية ودعماً.

تشارك جمعيتنا بنشاط في المساعدات الإنسانية، ودعم التنمية، وتشجيع التطوع. نقوم بتصميم وتنفيذ مشاريع تمكّن الأفراد والمجتمعات من خلال المبادرات النفسية التربوية، والبيئية، والفنية، والثقافية، والإعلامية، دون أي قيود جغرافية.

جزء أساسي من مهمتنا هو رفع الوعي وتكبير أصوات الفئات المهمشة غالبًا. في هذا السياق، تلتزم Avec Human Supporters بمشاركة الأخبار والقصص والتعبيرات الثقافية من جميع أنحاء العالم، مما يسهم في فهم أفضل لواقعهم وتراثهم وقدرتهم على الصمود.

من خلال العمل الجماعي، والشراكات، والمشاركة المدنية، نهدف إلى دعم كرامة الإنسان، وتشجيع المواطنة الفاعلة، وتعزيز التضامن الحقيقي عبر الحدود.`,
metaTitle:"بيان حول مسؤوليتنا الرقمية والتزامنا البيئي",
metaText:`لماذا لا نستخدم منصات Meta
لا نستخدم منصات Meta. تُنشر أخبارنا الرسمية حصريًا على موقعنا الإلكتروني، بما يتماشى مع التزامنا بالمسؤولية الرقمية واحترام البيئة.
يعكس هذا البيان موقفًا واعيًا وأخلاقيًا يوجّه ممارساتنا في الاتصال وعلاقتنا بالعالم الرقمي.

لماذا لا نعيد نشر المحتوى على منصات متعددة
في المشهد الرقمي اليوم، غالبًا ما يتم نسخ المعلومات وإعادة توزيعها عبر العديد من المنصات. بينما تزيد هذه الممارسة من مدى الوصول، فإنها أيضًا تزيد بشكل كبير من استهلاك الموارد الرقمية. كل إعادة نشر أو مشاركة أو نشر مكرر تتطلب:

مساحة تخزين إضافية على الخوادم

زيادة في نقل البيانات

أنظمة معالجة ونسخ احتياطي مستمرة
هذا التكرار يضاعف التكلفة البيئية لمعلومة واحدة.
لقد اخترنا مسارًا مختلفًا: النشر مرة واحدة، بمسؤولية، على منصة نتحكم بها ونديرها بعناية.

التكلفة البيئية للطاقة الرقمية
الخدمات الرقمية ليست مجرد مفاهيم افتراضية. وراء كل موقع إلكتروني أو منصة أو شبكة اجتماعية يوجد بنية تحتية ضخمة تشمل:

مراكز البيانات

خوادم عالية السعة

استهلاك مستمر للكهرباء
تعمل هذه البنى التحتية على مدار الساعة وتتطلب كميات هائلة من الطاقة لضمان عملها بشكل موثوق.
جانب حاسم وغالبًا ما يتم تجاهله هو التبريد. لمنع ارتفاع حرارة الخوادم، تعتمد مراكز البيانات بشكل كبير على أنظمة تبريد غالبًا ما تكون قائمة على المياه.
تُستخدم كميات كبيرة من المياه لتبريد الخوادم، ويُفقد الكثير منها عبر التبخر، مما يؤدي إلى:

هدر المياه

زيادة الضغط على الموارد المائية المحلية

خلل بيئي طويل الأمد

الرصانة الرقمية كخيار أخلاقي
يتماشى قرارنا مع مبدأ الرصانة الرقمية—أي تقليل الاستهلاك الرقمي غير الضروري بوعي. بالنسبة لنا، يعني ذلك:

الحد من تكرار المحتوى

تقليل الاعتماد على المنصات الرقمية المستغلة للموارد

إعطاء الأولوية للجودة والعمق والنية على الظهور المستمر
نعتقد أن الاتصال المسؤول لا يعني التواجد في كل مكان، بل يعني الاتساق، والوصول، والاحترام.

مسؤوليتنا تجاه البيئة
احترام البيئة يعني أيضًا التساؤل عن الأنظمة غير المرئية التي تستهلك الموارد الطبيعية بصمت. الكهرباء والخوادم والمياه ليست مفاهيم مجردة؛ فهي موارد محدودة لها عواقب بيئية حقيقية.
من خلال مركزية اتصالاتنا على موقعنا الرسمي، نهدف إلى:

تقليل بصمتنا الرقمية

الحد من استهلاك الطاقة غير الضروري

التصرف بما يتماشى مع قيمنا البيئية
قد يقلل هذا الخيار من تواجدنا على المنصات الرئيسية، لكنه يعزز نزاهة أفعالنا.

موقف واعٍ وشفاف
نفهم أن هذا القرار قد ينطوي على تحديات، بما في ذلك انخفاض الوصول أو الرؤية. ومع ذلك، نعتقد أن المسؤولية البيئية تتطلب التناسق، حتى عندما تتطلب ضبط النفس.
يبقى موقعنا الإلكتروني المصدر الرسمي الوحيد لأخبارنا وأنشطتنا ومواقفنا. ندعو القراء والشركاء والداعمين للتفاعل معنا مباشرة من خلال هذه المنصة.
اختيار عدم تكرار المعلومات هو بالنسبة لنا شكل من أشكال الاحترام—لجمهورنا، وقيمنا، وبيئتنا المشتركة.

نشر أقل، ولكن بمعنى. التواصل بمسؤولية ووعي.`,
hrsjtitle:"حقوق الإنسان والعدالة الاجتماعية\n",
hrsjtext:`تشمل هذه الفئة جميع الأنشطة التي تهدف إلى تعزيز المساواة والشمولية والكرامة وحماية الفئات الضعيفة، مع زيادة الوعي بقضايا حقوق الإنسان والعدالة الاجتماعية.
\n
التوعية والتعليم والتحسيس في فرنسا
محاضرات عامة، معارض، وتجميعات مجتمعية تتناول حقوق الإنسان، العدالة الاجتماعية، المساواة بين الجنسين، الرفاهية النفسية والاجتماعية، ومكافحة التمييز.
\n
المشروع التعليمي للأطفال والنساء
دعم تعليمي للأطفال الذين تتراوح أعمارهم بين 7 و9 سنوات، والأطفال المعرضين للخطر، والمتسربين من المدرسة، وبرامج محو الأمية للنساء، لضمان وصول متساوٍ إلى التعليم وفرص التعلم.
\n
أنشطة نادي النساء
أنشطة تعليمية، توعوية ونفسية اجتماعية تركز على العناية بالنفس، التربية الإيجابية، رفاهية الأسرة وتمكين المرأة.
\n
مشروع كأس العالم للأهداف العالمية للنساء والفتيات
زيادة الوعي بأهداف التنمية المستدامة (SDGs)، وتعزيز المساواة بين الجنسين والمشاركة المدنية والعمل المجتمعي من خلال التعليم والرياضة.
\n
ورش عمل للشباب حول الدعم النفسي والمهارات المهنية
ورش لتقوية القدرات تهدف إلى دعم الصحة النفسية، المرونة، فرص التوظيف، والشمول الاجتماعي للشباب`,
nfetittle:"\nالتعليم اللا منهجي",
nfetext:`تشمل هذه الفئة النهج التعليمية المبنية على التعلم التشاركي، التجريبي، والإبداعي، لدعم التنمية الشخصية، وتنمية المهارات الاجتماعية، والتعلم مدى الحياة خارج أنظمة التعليم الرسمية.
\n
الأنشطة والمشاريع ضمن هذا المجال:
\n
برامج التعليم اللامنهجي في فرنسا
أنشطة تعليمية وثقافية تعتمد على منهجيات التعليم اللامنهجي، وتشمل النقاشات، الورش الإبداعية، ومساحات التعلم المجتمعية.
\n
مشروع «Hands in Clay»
تعلم قائم على الفن من خلال ورش الطين والسيراميك، يهدف إلى تعزيز الإبداع، التعبير عن الذات، تنمية المهارات العملية، والتعلم من خلال الممارسة.
\n
المخيمات الصيفية والشتوية للأطفال
برامج تعليمية، ترفيهية واجتماعية منظمة توفر بيئات تعلم آمنة وداعمة للأطفال.
\n
الأنشطة الصيفية للأطفال والشباب
جلسات تعليمية، إبداعية وترفيهية تدعم النمو الاجتماعي والرفاه النفسي خلال العطلات المدرسية.
\n
ورش عمل للشباب حول الدعم النفسي والمهارات المهنية
(المكون التعليمي) تطوير المهارات من خلال ورش عمل تشاركية حول مهارات الحياة، التخطيط المهني، والتنمية الشخصية.`,
tctittle:"\nالمشاريع المشتركة للثقافات الدولية",
tctext:`يشمل هذا المجال جميع المبادرات التي تهدف إلى تعزيز الحوار بين الثقافات، والتعاون عبر الحدود، والتضامن الدولي، والتبادل بين فرنسا وأوروبا وشركاء الأفق الثقافي الأوسط.
\n
الأنشطة والمشاريع ضمن هذا المجال:
\n
الشراكات الدولية والتبادل
تسهيل التعاون بين المنظمات الفرنسية، والمتطوعين، والسلطات المحلية، والشركاء في الأفق الثقافي الأوسط من خلال ندوات مشتركة، ودورات تدريبية، ومشاريع تعاونية.
\n
مشروع تبادل الشباب (فيلق التضامن الأوروبي)
استضافة متطوعين فرنسيين في نابلس ضمن برامج تعلم بين-ثقافي منظمة، تهدف إلى تعزيز الفهم المتبادل، والتضامن، والمشاركة المدنية.
\n
أنشطة التضامن وجمع التبرعات
تحفيز المجتمع المدني الفرنسي لدعم البرامج التعليمية والنفسية-الاجتماعية وتعزيز مبادرات التضامن الدولي.
\n
أنشطة التوعية الثقافية المشتركة المرتبطة بنابلس
مبادرات للتبادل الثقافي، وسرد القصص، وتبادل المعلومات تربط الجمهور الفرنسي بالمجتمعات الفلسطينية.`,


},
fr:{nav:["Accueil","À propos","Projets","Partenaires","Contact","Notre Histoire"],
  support:"Faire un don",
  heroT:"Avec Human Supporters",
  heroD:"Des Mains Solidaires, Un Monde Meilleur, Nous connectons les bénévoles à des projets significatifs.",
  cards:[[" Éducation populaire et éducation non formelle ","L’éducation populaire, c’est une approche qui vise à rendre l’apprentissage accessible à tous, en dehors des cadres formels de l’éducation traditionnelle. Elle met l’accent sur la participation active, l’émancipation, la coopération et le développement critique. Elle s’appuie souvent sur des méthodes participatives, des ateliers, des débats, et elle s’adresse à un large public, souvent en lien avec des enjeux sociaux, culturels ou politiques"],
  ["Droits de l’homme et justice sociale","Le soutien éducatif pour les enfants âgés de 7 à 9 ans, les enfants à risque, les décrocheurs scolaires, ainsi que les programmes d’alphabétisation pour les femmes, en garantissant l’égalité d’accès à l’éducation et aux opportunités d’apprentissage."],
  ["Méditerranéen et transculturel européen","Ce domaine comprend toutes les initiatives qui favorisent le dialogue interculturel, la coopération transfrontalière, la solidarité internationale et les échanges entre la France, l’Europe et les partenaires méditerranéens."]],
  contact:"Informations de Contact",
  name: "Entrez votre nom",
  email: "Entrez votre email",
  storytitle:"Notre Histoire:",
  orgtyp:"Type d’organisation : Organisation non gouvernementale",
  storytext:`AVEC Human Supporters a été fondée en février 2013. Dès le début, l’association avait pour objectif de soutenir l’éducation, la culture et les valeurs humaines à travers la coopération internationale.

Sa première grande action a été la subvention ARASICOD, financée par le Conseil régional des Pays de la Loire. Cette subvention a soutenu un projet éducatif de trois ans mis en œuvre en Palestine, en coopération avec l’Association Human Supporters. Le projet visait à soutenir les activités éducatives et à construire une coopération forte et durable entre partenaires locaux et internationaux.

Dans le cadre de son engagement pour les échanges culturels et la sensibilisation, AVEC Human Supporters a organisé un Festival pour la Palestine à Nantes, en France. Le festival avait pour objectif de sensibiliser le public à la situation en Palestine et de promouvoir la solidarité culturelle à travers l’art, le dialogue et la participation communautaire.

L’association a également développé plusieurs projets d’échanges pour la jeunesse entre la Palestine et la France. Ces projets ont créé des espaces pour permettre aux jeunes de se rencontrer, de partager leurs expériences et de mieux comprendre les cultures et réalités de chacun.

Au fil des années, AVEC Human Supporters a réalisé de nombreuses autres initiatives, notamment le Projet Amal, différents projets de danse et le Projet Festiclown. À travers Festiclown, des clowns venus de différents pays ont été invités en Palestine pour travailler dans les écoles et animer des ateliers artistiques et éducatifs avec les enfants et les jeunes. Ces projets ont utilisé l’art, le mouvement et le jeu comme outils d’expression, d’apprentissage et de soutien émotionnel.

Tout au long de son parcours, AVEC Human Supporters a coopéré avec de nombreuses institutions et construit des partenariats solides, notamment avec CEMEA et l’Association Human Supporters. Ces partenariats ont permis d’assurer une coopération durable et la réussite des projets communs.

Depuis 2023, le travail de l’association s’est développé et a eu un impact plus fort au niveau local en France. AVEC Human Supporters a décidé de se concentrer davantage sur l’éducation du public.

Durant cette phase, l’association a mené des recherches sur la manière de combiner éducation du public et art. L’objectif était de créer de nouvelles méthodes d’apprentissage et de développer une approche innovante liée à la guérison psychologique, basée sur la compréhension du mouvement du corps et de l’expression physique.

L’association considère que le corps porte des histoires, des émotions et des souvenirs, et que le mouvement peut être un outil puissant d’expression et de guérison.

Une étape importante de ce processus a été la mise en œuvre d’un projet en partenariat avec CEMEA et la Municipalité de Rezé, avec l’accueil de Neaji Islam. Ce projet a renforcé le lien entre la pratique artistique, l’éducation non formelle et le travail communautaire, et a contribué à construire des relations solides avec les acteurs locaux.

Aujourd’hui, AVEC Human Supporters vise à développer davantage son travail aux niveaux local et international. L’association cherche à bâtir des partenariats de confiance qui partagent ses valeurs, œuvrent pour la justice sociale et soutiennent les nouvelles idées et les projets émergents. AVEC Human Supporters considère son travail comme un processus vivant et évolutif, qui grandit avec les personnes, les communautés et les expériences partagées.`,
  message: "Écrivez votre message",
  footerEmail:"avechsa@gmail.com",
  footerPhone:"+33 0749749261",
  footerAddress:"102 Rue Saint-Jacques 44200 Nantes - France",
  title:"Envoyez-nous un message",
  button:"Envoyer",
  learnMore: "En savoir plus",
  showLess: "Voir moins",
  btnv:"Info▾",
  news:"⚠️ Nous n’utilisons pas les plateformes Meta.[En savoir plus]⚠️",
  fbtnv:"Info▾",
  aboutTitle:"À propos de nous : ",
  aboutText:`Avec Human Supporters est une association à but non lucratif, humanitaire et solidaire, engagée dans la défense des droits humains, la promotion du droit international et la lutte contre toutes les formes de discrimination. Nous croyons en l’égalité entre les peuples et les individus, et nous œuvrons pour promouvoir la tolérance, le respect mutuel et la justice sociale afin de construire une société plus inclusive et solidaire.

Notre association est activement impliquée dans l’aide humanitaire, le soutien au développement et la promotion du bénévolat. Nous concevons et mettons en œuvre des projets qui autonomisent les individus et les communautés à travers des initiatives psycho-éducatives, environnementales, artistiques, culturelles et médiatiques, sans restriction géographique.

Une partie essentielle de notre mission consiste à sensibiliser et à amplifier les voix souvent marginalisées. Dans ce contexte, Avec Human Supporters s’engage profondément à partager des actualités, des histoires et des expressions culturelles du monde entier, contribuant à une meilleure compréhension de leurs réalités, de leur patrimoine et de leur résilience.

Par l’action collective, les partenariats et l’engagement civique, nous visons à soutenir la dignité humaine, encourager la citoyenneté active et favoriser une solidarité significative au-delà des frontières.`,
metaTitle:"Déclaration sur notre responsabilité numérique et notre engagement environnemental",
metaText:`Pourquoi nous n’utilisons pas les plateformes Meta
Nous n’utilisons pas les plateformes Meta. Nos informations officielles sont publiées exclusivement sur notre site web, conformément à notre engagement en matière de responsabilité numérique et de respect de l’environnement.
Cette déclaration reflète une position consciente et éthique qui guide nos pratiques de communication et notre relation avec le monde numérique.

Pourquoi nous ne repartageons pas le contenu sur plusieurs plateformes
Dans le paysage numérique actuel, l’information est souvent dupliquée et redistribuée sur de nombreuses plateformes. Bien que cette pratique augmente la visibilité, elle accroît également considérablement la consommation des ressources numériques. Chaque republication, partage ou duplication nécessite :

Un espace de stockage supplémentaire sur les serveurs

Une augmentation du transfert de données

Des systèmes de traitement et de sauvegarde continus
Cette répétition multiplie le coût environnemental d’une seule information.
Nous avons choisi une voie différente : publier une seule fois, de manière responsable, sur une plateforme que nous contrôlons et entretenons avec intention.

Le coût environnemental de l’énergie numérique
Les services numériques ne sont pas immatériels. Derrière chaque site web, plateforme ou réseau social se trouve une infrastructure massive comprenant :

Des centres de données

Des serveurs haute capacité

Une consommation continue d’électricité
Ces infrastructures fonctionnent 24h/24 et nécessitent d’énormes quantités d’énergie pour fonctionner de manière fiable.
Un aspect crucial souvent négligé est le refroidissement. Pour éviter la surchauffe, les centres de données dépendent fortement de systèmes de refroidissement, dont beaucoup sont à base d’eau.
De grandes quantités d’eau sont utilisées pour refroidir les serveurs, et une partie importante s’évapore, contribuant à :

Le gaspillage d’eau

Une pression accrue sur les ressources locales en eau

Un déséquilibre écologique à long terme

Sobriété numérique comme choix éthique
Notre décision s’aligne sur le principe de sobriété numérique — une réduction consciente de la consommation numérique inutile. Pour nous, cela signifie :

Limiter la duplication des contenus

Réduire la dépendance aux plateformes numériques extractives

Prioriser la qualité, la profondeur et l’intention plutôt que la visibilité constante
Nous croyons qu’une communication responsable ne consiste pas à être partout, mais à être cohérent, accessible et respectueux.

Notre responsabilité envers l’environnement
Respecter l’environnement signifie aussi questionner les systèmes invisibles qui consomment les ressources naturelles en silence. L’électricité, les serveurs et l’eau ne sont pas des concepts abstraits ; ce sont des ressources limitées avec de réelles conséquences écologiques.
En centralisant notre communication sur notre site officiel, nous visons à :

Réduire notre empreinte numérique

Limiter la consommation d’énergie inutile

Agir conformément à nos valeurs environnementales
Ce choix peut réduire notre présence sur les plateformes grand public, mais il renforce l’intégrité de nos actions.

Une position consciente et transparente
Nous comprenons que cette décision peut présenter des défis, y compris une portée ou une visibilité réduite. Cependant, nous croyons que la responsabilité écologique exige de la cohérence, même lorsqu’elle demande de la retenue.
Notre site web reste la seule source officielle de nos nouvelles, activités et positions. Nous invitons lecteurs, partenaires et soutiens à interagir directement avec nous via cet espace.
Ne pas multiplier l’information est, pour nous, une forme de respect — envers notre public, nos valeurs et notre environnement partagé.

Publier moins, mais avec du sens. Communiquer de manière responsable et consciente.`,
hrsjtitle:"Droits de l’Homme et Justice Sociale\n",
hrsjtext:`Cette section inclut toutes les actions visant à promouvoir l’égalité, l’inclusion, la dignité et la protection des groupes vulnérables, tout en sensibilisant aux questions de droits de l’homme et de justice sociale.
\n
Sensibilisation, éducation et information en France
Conférences publiques, expositions et rassemblements communautaires abordant les droits de l’homme, la justice sociale, l’égalité des genres, le bien-être psychosocial et la lutte contre les discriminations.
\n
Projet éducatif pour les enfants et les femmes
Soutien éducatif pour les enfants âgés de 7 à 9 ans, enfants à risque, enfants décrocheurs scolaires et programmes d’alphabétisation pour les femmes, afin d’assurer un accès égal à l’éducation et aux opportunités d’apprentissage.
\n
Activités du Club des Femmes
Activités éducatives, de sensibilisation et psychosociales axées sur le soin de soi, la parentalité positive, le bien-être familial et l’autonomisation des femmes.
\n
Projet Global Goals World Cup pour les femmes et les filles
Sensibilisation aux Objectifs de Développement Durable (ODD), promotion de l’égalité des genres, de la participation citoyenne et de l’action communautaire à travers l’éducation et le sport.
\n
Ateliers pour la jeunesse sur le soutien psychologique et les compétences professionnelles
Ateliers de renforcement des capacités visant à soutenir le bien-être mental, la résilience, l’employabilité et l’inclusion sociale des jeunes.`,
nfetittle:" L'éducation populaire & Éducation Non-Formelle \n",
nfetext:`Cette section couvre les approches éducatives basées sur l’apprentissage participatif, expérientiel et créatif, soutenant le développement personnel, les compétences sociales et l’apprentissage tout au long de la vie en dehors des systèmes d’éducation formelle.
\n
Activités et projets dans ce domaine :
\n
Programmes d’éducation non formelle en France
Activités éducatives et culturelles utilisant des méthodologies non formelles, incluant des discussions, des ateliers créatifs et des espaces d’apprentissage communautaires.
\n
Projet « Hands in Clay »
Apprentissage artistique à travers des ateliers de modelage et de céramique, encourageant la créativité, l’expression de soi, les compétences pratiques et l’apprentissage par la pratique.
\n
Camps d’été et d’hiver pour enfants
Programmes éducatifs, récréatifs et sociaux structurés offrant des environnements d’apprentissage sûrs pour les enfants.
\n
Activités estivales pour enfants et jeunes
Sessions éducatives, créatives et récréatives soutenant le développement social et le bien-être pendant les vacances scolaires.
\n
Ateliers pour jeunes sur le soutien psychologique et les compétences professionnelles
(Composante éducative) Développement des compétences à travers des ateliers participatifs sur les compétences de vie, la planification de carrière et le développement personnel.`,
question:"L'éducation populaire au cœur de notre association",
tctittle:"Projets Transculturels et Internationaux\n",
tctext:`Ce domaine comprend toutes les initiatives visant à promouvoir le dialogue interculturel, la coopération transfrontalière, la solidarité internationale et les échanges entre la France, l’Europe et les partenaires de la région méditerranéenne.
\n
Activités et projets dans ce domaine :
\n
Partenariats internationaux et échanges
Facilitation de la coopération entre les organisations françaises, les volontaires, les collectivités locales et les partenaires méditerranéens à travers des séminaires communs, des sessions de formation et des projets collaboratifs.
\n
Projet d’échange de jeunes (Corps européen de solidarité)
Accueil de volontaires français à Naplouse dans le cadre de programmes structurés d’apprentissage interculturel, favorisant la compréhension mutuelle, la solidarité et l’engagement citoyen.
\n
Activités de solidarité et de collecte de fonds
Mobilisation de la société civile française pour soutenir des programmes éducatifs et psychosociaux et renforcer les initiatives de solidarité internationale.
\n
Activités de sensibilisation interculturelle liées à Naplouse
Initiatives d’échange culturel, de narration et de partage d’informations visant à connecter le public français avec les communautés palestiniennes.`,
qtext:`L'éducation populaire représente une approche d'apprentissage Ouvert à toutes et à tous, en dehors des cadres formels et parfois contraignants de l’éducation traditionnelle. Elle favorise la participation active, l’émancipation personnelle et le développement d’un esprit critique. Dans notre association, nous faisons le lien entre ces principes et la danse hip-hop. En effet, le hip-hop, dès ses origines, a toujours mis l’accent sur l’expression de soi,
la confiance en soi et l’accessibilité, en dehors des normes strictes de la danse classique. Cette dimension inclusive permet de pallier les éventuelles carences de l’éducation traditionnelle, qui peut parfois freiner la confiance en soi. En mettant l’accent sur la sortie de la zone de confort, l’expression libre et la valorisation de chaque individu, nous permettons à chacun de développer sa
confiance en soi et d’épanouir son potentiel personnel. Depuis le lancement de notre projet en 2022, nous œuvrons à développer et enrichir cette initiative, en garantissant un accès égalitaire à la danse hip-hop pour tous. Ainsi, notre association incarne pleinement les valeurs de l’éducation populaire à travers l’art et la culture.`,
},
};

function setLang(l,btn){
document.documentElement.dir = l === "ar"?"rtl":"ltr";
document.querySelectorAll(".lang").forEach(b=>b.classList.remove("selected"));
if(btn) btn.classList.add("selected");
const d=t[l];

currentLang = l; // track current language globally

// --- FOOTER FORM PLACEHOLDERS ---
const fTitle = document.getElementById("footerMsgTitle");
if (fTitle) fTitle.innerText = d.title;
const aboutusTitle = document.getElementById("aboutusTitle");
if (aboutusTitle) aboutusTitle.innerText = d.aboutTitle;
const aboutusText = document.getElementById("aboutusText");
if (aboutusText) aboutusText.innerText = d.aboutText;
const news = document.getElementById("news");
if (news) news.innerText = d.news;
const fName = document.getElementById("fNameInput");
if (fName) fName.placeholder = d.name;
const btnDropDown = document.getElementById("btnDropDown");
if (btnDropDown) btnDropDown.innerText = d.btnv;
const fbtnDropDown = document.getElementById("fbtnDropDown");
if (fbtnDropDown) fbtnDropDown.innerText = d.fbtnv;
const ourStoryTittle = document.getElementById("ourStoryTittle");
if (ourStoryTittle) ourStoryTittle.innerText = d.storytitle;
const ourStoryText = document.getElementById("ourStoryText");
if (ourStoryText) ourStoryText.innerText = d.storytext;
const questionEducation = document.getElementById("questionEducation");
if (questionEducation) questionEducation.innerText = d.qtext;
const question = document.getElementById("question");
if (question) question.innerText = d.question;
const hrsjTitle = document.getElementById("hrsjTitle");
if (hrsjTitle) hrsjTitle.innerText = d.hrsjtitle;
const hrsjText = document.getElementById("hrsjText");
if (hrsjText) hrsjText.innerText = d.hrsjtext;
const nfeTittle = document.getElementById("nfeTittle");
if (nfeTittle) nfeTittle.innerText = d.nfetittle;
const nfeText = document.getElementById("nfeText");
if (nfeText) nfeText.innerText = d.nfetext;
const orgTyp = document.getElementById("orgTyp");
if (orgTyp) orgTyp.innerText = d.orgtyp
const tcTittle = document.getElementById("tcTittle");
if (tcTittle) tcTittle.innerText = d.tctittle;
const tcText =document.getElementById("tcText");
if (tcText) tcText.innerText = d.tctext;

const fEmail = document.getElementById("fEmailInput");
if (fEmail) fEmail.placeholder = d.email;

const fMsg = document.getElementById("fMsgInput");
if (fMsg) fMsg.placeholder = d.message;

const fButton = document.getElementById("senButton");
if (fButton) fButton.innerText = d.button;
const newsLetterTittle = document.getElementById("newsLetterTittle");
if (newsLetterTittle) newsLetterTittle.innerText = d.metaTitle;

const newsLetterText = document.getElementById("newsLetterText");
if (newsLetterText) newsLetterText.innerText = d.metaText;
// RTL for footer form
const footerDiv = fName?.closest("div");
if (footerDiv) {
  footerDiv.style.direction = l === "ar" ? "rtl" : "ltr";
  footerDiv.style.textAlign = l === "ar" ? "right" : "left";
}
// support button
const supportBtn = document.getElementById("supportBtn");
if (supportBtn) {
  supportBtn.textContent = d.support;
}
// fade hero
hero.classList.add("fade");
setTimeout(()=>{ 
  heroTitle.textContent=d.heroT;
  heroText.textContent=d.heroD;
  hero.classList.remove("fade");
},300);
// NAV
[navHome,navAbout,navProjects,navOurPartners,navContact,navOurStory].forEach((e,i)=>e.textContent=d.nav[i]);
[fHome,fAbout,fProjects,fPartners,fContact,fOurStory].forEach((e,i)=>e.textContent=d.nav[i]);
// CARDS
c1t.textContent=d.cards[0][0]; c1d.textContent=d.cards[0][1];
c2t.textContent=d.cards[1][0]; c2d.textContent=d.cards[1][1];
c3t.textContent=d.cards[2][0]; c3d.textContent=d.cards[2][1];
// CONTACT INFO
let mapLink = 'https://www.google.pl/maps/place/102+Rue+Saint-Jacques,+44200+Nantes,+France/@47.0945367,-1.8196219,51618m/data=!3m1!1e3!4m6!3m5!1s0x4805e937da58e9bd:0x744c5b487e7b6176!8m2!3d47.1959082!4d-1.5377667!16s%2Fg%2F11c2dcq30p?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D';
if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
  mapLink = `maps://maps.apple.com/?q=${encodeURIComponent(d.address)}`;
}else{
  mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.address)}`;
}
contactAddress.textContent=d.address; contactAddress.href=mapLink;
contactEmail.textContent=d.email; contactEmail.href=`mailto:avechsa@gmail.com`;
contactPhone.textContent=d.phone; contactPhone.href=`tel:+33 0749749261`;
footerContactTitle.textContent=d.contact;
footerAddress.textContent=d.address; footerAddress.href=mapLink;
footerEmail.textContent=d.email; footerEmail.href=`mailto:avechsa@gmail.com`;
footerPhone.textContent=d.phone; footerPhone.href=`tel:+33 0749749261`;
// DONATE
updateMappedElements(l);

}
setLang("fr",document.querySelector(".lang.selected"));
window.addEventListener("scroll",activateLinkByScroll);
function scrollTop(e) {
  e.preventDefault();
  document.getElementById("top").scrollIntoView({
    behavior: "smooth"
  });
}

// Get footer elements
const footerContactTitle = document.getElementById("footerContactTitle");
const footerAddress = document.getElementById("footerAddress");
const footerEmail = document.getElementById("footerEmail");
const footerPhone = document.getElementById("footerPhone");

// Function to update footer based on selected language
function updateFooter(lang) {
  const d = t[lang];

  if (!d) return;

  footerContactTitle.textContent = d.contact;
  footerAddress.textContent = d.address;
  footerAddress.href = "https://www.google.pl/maps/place/102+Rue+Saint-Jacques,+44200+Nantes,+France/@47.0945367,-1.8196219,73811m/data=!3m1!1e3!4m6!3m5!1s0x4805e937da58e9bd:0x744c5b487e7b6176!8m2!3d47.1959082!4d-1.5377667!16s%2Fg%2F11c2dcq30p?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"; 
  footerEmail.textContent = d.email;
  footerEmail.href = `mailto:avechsa@gmail.com}`;
  footerPhone.textContent = d.phone;
  footerPhone.href = `tel:+33 0749749261`;
}
updateFooter(currentLang);
function translatePage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach(el => {
    const key = el.dataset.i18n; // get the key, e.g., "contact"
    if (!t[lang][key]) return;

    // Special handling for links
    if (el.tagName === "A" && (key === "email" || key === "phone")) {
      if (key === "email") el.href = `mailto:avechsa@gmail.com`;
      if (key === "phone") el.href = `tel:+33 0749749261`;
    }

    el.textContent = t[lang][key]; // set the translation
  });
}
document.querySelectorAll(".lang").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.textContent.toLowerCase(); // e.g., "en"
    translatePage(lang);
  });
});
const toggle = document.querySelector(".dropdown-toggle");
const menu = document.querySelector(".dropdown-menu");

toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", !expanded);
  menu.style.display = expanded ? "none" : "block";
});

/* close when clicking outside */
document.addEventListener("click", (e) => {
  if (!toggle.contains(e.target) && !menu.contains(e.target)) {
    toggle.setAttribute("aria-expanded", "false");
    menu.style.display = "none";
  }
});
// ================= EMAILJS (FIXED – NOTHING ELSE TOUCHED) =================
// Initialize EmailJS
emailjs.init("nxkp4aPmtJOOqae__");

function sendEmail() {
  const contactForm = document.getElementById("contactForm");
  const submitBtn = document.getElementById("senButton");
  const originalText = submitBtn.innerText;

  // Feedback
  submitBtn.innerText = "Sending...";
  submitBtn.disabled = true; // prevent multiple clicks

  emailjs.sendForm("service_bfwtjhe", "template_kw9136u", contactForm, "nxkp4aPmtJOOqae__")
    .then(() => {
      alert("Message sent successfully!");
      contactForm.reset();       // clear fields
      submitBtn.innerText = originalText;
      submitBtn.disabled = false;
    })
    .catch((error) => {
      alert("Failed to send message, please try again.");
      console.error("EmailJS error:", error);
      submitBtn.innerText = originalText;
      submitBtn.disabled = false;
    });
}
const dropdownButton = document.getElementById('btnDropDown');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownButton.addEventListener('click', function(e) {
  e.preventDefault(); // prevent button default

  // Toggle visibility
  if (dropdownMenu.style.display === 'block') {
    dropdownMenu.style.display = 'none';
  } else {
    dropdownMenu.style.display = 'block';
  }
});

// Optional: click outside to close
document.addEventListener('click', function(e) {
  if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.style.display = 'none';
  }
});

