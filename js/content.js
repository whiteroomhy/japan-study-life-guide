const LANGUAGES = {
  'zh-Hant': { label: '繁體中文', short: '繁中' },
  'zh-Hans': { label: '简体中文', short: '简中' },
  'ja': { label: '日本語', short: '日本語' },
  'en': { label: 'English', short: 'EN' }
};

const UI = {
  'zh-Hant': {
    siteName: '日本留學生活指南', siteKicker: '學生小組專案',
    nav: { home:'首頁', preparation:'留學前準備', arrival:'抵達日本', life:'日本生活', career:'畢業與就職', checklist:'準備清單', sources:'資料來源', team:'小組成員' },
    language:'語言', menu:'選單', skip:'跳到主要內容', home:'首頁',
    footerText:'為準備赴日或剛抵達日本的留學生整理的簡易資訊網站。內容僅供一般參考，重要手續請以日本政府與學校最新公告為準。',
    copyright:'學生小組製作 · 最後更新：2026年7月', readMore:'查看內容', backHome:'返回首頁', sourceLabel:'官方資料',
    checklistSaved:'勾選進度會保存在這台裝置的瀏覽器中。', reset:'重設全部', progress:'完成進度', completed:'已完成', items:'項',
    sourceVisit:'前往官方網站', updated:'查閱日期：2026年7月16日'
  },
  'zh-Hans': {
    siteName: '日本留学生活指南', siteKicker: '学生小组项目',
    nav: { home:'首页', preparation:'留学前准备', arrival:'抵达日本', life:'日本生活', career:'毕业与就业', checklist:'准备清单', sources:'资料来源', team:'小组成员' },
    language:'语言', menu:'菜单', skip:'跳到主要内容', home:'首页',
    footerText:'为准备赴日或刚抵达日本的留学生整理的简易信息网站。内容仅供一般参考，重要手续请以日本政府与学校最新公告为准。',
    copyright:'学生小组制作 · 最后更新：2026年7月', readMore:'查看内容', backHome:'返回首页', sourceLabel:'官方资料',
    checklistSaved:'勾选进度会保存在本设备的浏览器中。', reset:'重置全部', progress:'完成进度', completed:'已完成', items:'项',
    sourceVisit:'前往官方网站', updated:'查阅日期：2026年7月16日'
  },
  'ja': {
    siteName: '日本留学生活ガイド', siteKicker: '学生グループ制作',
    nav: { home:'ホーム', preparation:'留学前の準備', arrival:'日本到着後', life:'日本での生活', career:'卒業・就職', checklist:'準備チェック', sources:'情報源', team:'メンバー' },
    language:'言語', menu:'メニュー', skip:'本文へ移動', home:'ホーム',
    footerText:'日本留学を準備している方、または日本に来たばかりの留学生向けの簡易情報サイトです。重要な手続きは、必ず日本政府や学校の最新情報をご確認ください。',
    copyright:'学生グループ制作 · 最終更新：2026年7月', readMore:'詳しく見る', backHome:'ホームへ戻る', sourceLabel:'公式情報',
    checklistSaved:'チェック状況は、この端末のブラウザに保存されます。', reset:'すべてリセット', progress:'進捗', completed:'完了', items:'項目',
    sourceVisit:'公式サイトを開く', updated:'確認日：2026年7月16日'
  },
  'en': {
    siteName: 'Japan Study & Life Guide', siteKicker: 'Student Group Project',
    nav: { home:'Home', preparation:'Before You Study', arrival:'After Arrival', life:'Life in Japan', career:'Graduation & Career', checklist:'Checklist', sources:'Sources', team:'Team' },
    language:'Language', menu:'Menu', skip:'Skip to main content', home:'Home',
    footerText:'A simple information site for students preparing to study in Japan or newly arrived in Japan. Always confirm important procedures with the latest government and school guidance.',
    copyright:'Student group project · Last updated July 2026', readMore:'View guide', backHome:'Back to home', sourceLabel:'Official source',
    checklistSaved:'Your progress is saved in this browser on this device.', reset:'Reset all', progress:'Progress', completed:'completed', items:'items',
    sourceVisit:'Visit official website', updated:'Accessed July 16, 2026'
  }
};

const HOME = {
  'zh-Hant': {
    eyebrow:'從準備到畢業', title:'第一次日本留學，也能一步一步完成。',
    lead:'把複雜的留學資訊整理成四個階段，幫助華語留學生掌握申請、入境、生活與就職的基本流程。',
    primary:'開始查看指南', secondary:'打開準備清單', routeTitle:'你的留學路線',
    routes:[['🎓','留學前準備','選學校、申請、簽證'],['🛬','抵達日本','在留卡、市役所、保險'],['🏠','日本生活','住宿、交通、打工、安全'],['💼','畢業與就職','求職、在留資格、離境']],
    sectionEyebrow:'四個階段', sectionTitle:'按照你現在的狀況開始', sectionLead:'不需要一次讀完所有資訊。選擇目前最需要的階段即可。',
    stages:[
      ['01','🧭','留學前準備','了解學校種類、申請時程、必要文件與簽證流程。','preparation.html'],
      ['02','🛬','抵達日本','整理入境後兩週內常見的行政與生活手續。','arrival.html'],
      ['03','🏠','日本生活','掌握租屋、交通、醫療、打工和災害應對。','life.html'],
      ['04','💼','畢業與就職','了解日本求職節奏、在留資格變更與回國手續。','career.html']
    ],
    toolsEyebrow:'實用工具', toolsTitle:'不只閱讀，也能實際使用',
    checklistTitle:'留學準備 Checklist', checklistText:'把申請、行李與入境後手續分組整理，完成一項就勾選一項，進度會自動保留。',
    checklistBullets:['不需要登入或註冊','使用瀏覽器 localStorage 儲存','四種語言完整切換'],
    sourceTitle:'資料來源透明', sourceText:'頁面內容參考日本政府與 JASSO 等官方資訊，並提供原始連結，方便自行確認最新規定。',
    sourceBullets:['標示官方機構名稱','保留查閱日期','提醒規定可能變更'],
    noticeTitle:'重要提醒：', notice:'本網站是學生小組作品，不提供法律、簽證或醫療判斷。遇到個人狀況時，請直接詢問學校、入管局、市役所或相關專業機構。'
  },
  'zh-Hans': {
    eyebrow:'从准备到毕业', title:'第一次日本留学，也能一步一步完成。',
    lead:'把复杂的留学信息整理成四个阶段，帮助中文使用者掌握申请、入境、生活与就业的基本流程。',
    primary:'开始查看指南', secondary:'打开准备清单', routeTitle:'你的留学路线',
    routes:[['🎓','留学前准备','选学校、申请、签证'],['🛬','抵达日本','在留卡、市役所、保险'],['🏠','日本生活','住宿、交通、打工、安全'],['💼','毕业与就业','求职、在留资格、离境']],
    sectionEyebrow:'四个阶段', sectionTitle:'按照你现在的情况开始', sectionLead:'不需要一次读完所有信息。选择目前最需要的阶段即可。',
    stages:[
      ['01','🧭','留学前准备','了解学校种类、申请时间、必要文件与签证流程。','preparation.html'],
      ['02','🛬','抵达日本','整理入境后两周内常见的行政与生活手续。','arrival.html'],
      ['03','🏠','日本生活','掌握租房、交通、医疗、打工和灾害应对。','life.html'],
      ['04','💼','毕业与就业','了解日本求职节奏、在留资格变更与回国手续。','career.html']
    ],
    toolsEyebrow:'实用工具', toolsTitle:'不只阅读，也能实际使用',
    checklistTitle:'留学准备 Checklist', checklistText:'把申请、行李与入境后手续分组整理，完成一项就勾选一项，进度会自动保留。',
    checklistBullets:['不需要登录或注册','使用浏览器 localStorage 保存','四种语言完整切换'],
    sourceTitle:'资料来源透明', sourceText:'页面内容参考日本政府与 JASSO 等官方信息，并提供原始链接，方便自行确认最新规定。',
    sourceBullets:['标注官方机构名称','保留查阅日期','提醒规定可能变更'],
    noticeTitle:'重要提醒：', notice:'本网站是学生小组作品，不提供法律、签证或医疗判断。遇到个人情况时，请直接咨询学校、入管局、市役所或相关专业机构。'
  },
  'ja': {
    eyebrow:'準備から卒業まで', title:'初めての日本留学も、一歩ずつ進められる。',
    lead:'複雑な留学情報を4つの段階に整理し、出願、入国、生活、就職までの基本的な流れを分かりやすく紹介します。',
    primary:'ガイドを見る', secondary:'チェックリストを開く', routeTitle:'留学のロードマップ',
    routes:[['🎓','留学前の準備','学校選び・出願・ビザ'],['🛬','日本到着後','在留カード・市役所・保険'],['🏠','日本での生活','住居・交通・アルバイト・安全'],['💼','卒業・就職','就職活動・在留資格・帰国']],
    sectionEyebrow:'4つの段階', sectionTitle:'今の状況から始めよう', sectionLead:'すべてを一度に読む必要はありません。今必要な項目から確認できます。',
    stages:[
      ['01','🧭','留学前の準備','学校の種類、出願時期、必要書類、ビザの流れを確認します。','preparation.html'],
      ['02','🛬','日本到着後','入国後2週間以内に行うことが多い手続きを整理します。','arrival.html'],
      ['03','🏠','日本での生活','住居、交通、医療、アルバイト、防災の基本を紹介します。','life.html'],
      ['04','💼','卒業・就職','日本の就職活動、在留資格変更、帰国前の手続きを確認します。','career.html']
    ],
    toolsEyebrow:'便利な機能', toolsTitle:'読むだけでなく、実際に使える',
    checklistTitle:'留学準備チェックリスト', checklistText:'出願、持ち物、到着後の手続きをグループ別に確認できます。チェック状況は自動保存されます。',
    checklistBullets:['ログイン・登録不要','ブラウザの localStorage に保存','4言語を切り替え可能'],
    sourceTitle:'情報源を明確に表示', sourceText:'日本政府やJASSOなどの公式情報を参考にし、最新情報を確認できるよう原文へのリンクも掲載しています。',
    sourceBullets:['公式機関名を表示','確認日を記載','制度変更の可能性を案内'],
    noticeTitle:'重要：', notice:'本サイトは学生グループの作品であり、法律・在留資格・医療に関する個別判断は行いません。個別の事情は、学校、出入国在留管理局、市区町村、専門機関へご相談ください。'
  },
  'en': {
    eyebrow:'From planning to graduation', title:'Your first study journey in Japan, one step at a time.',
    lead:'Complex information is organized into four stages, giving international students a clear overview of applications, arrival, daily life, and career preparation.',
    primary:'Explore the guide', secondary:'Open the checklist', routeTitle:'Your study journey',
    routes:[['🎓','Before You Study','Schools, applications, visas'],['🛬','After Arrival','Residence card, city office, insurance'],['🏠','Life in Japan','Housing, transport, work, safety'],['💼','Graduation & Career','Job hunting, status change, departure']],
    sectionEyebrow:'Four stages', sectionTitle:'Start from where you are now', sectionLead:'You do not need to read everything at once. Choose the stage that matches your current situation.',
    stages:[
      ['01','🧭','Before You Study','Learn about school types, application timing, documents, and visa steps.','preparation.html'],
      ['02','🛬','After Arrival','Review common administrative and daily-life tasks for your first two weeks.','arrival.html'],
      ['03','🏠','Life in Japan','Cover housing, transport, healthcare, part-time work, and disaster safety.','life.html'],
      ['04','💼','Graduation & Career','Understand job-hunting timelines, residence status changes, and departure tasks.','career.html']
    ],
    toolsEyebrow:'Useful tools', toolsTitle:'More than reading—something you can use',
    checklistTitle:'Study Preparation Checklist', checklistText:'Organize applications, packing, and after-arrival tasks. Check off completed items and keep progress automatically.',
    checklistBullets:['No account or sign-in needed','Saved with browser localStorage','Full switching across four languages'],
    sourceTitle:'Transparent sources', sourceText:'The guide references official information from Japanese government agencies and JASSO, with direct links for checking current rules.',
    sourceBullets:['Official organization names shown','Access date included','Reminder that rules may change'],
    noticeTitle:'Important: ', notice:'This is a student group project and does not provide legal, immigration, or medical advice. For individual cases, contact your school, immigration office, municipal office, or a qualified professional.'
  }
};

const PAGE_DATA = {
  preparation: {
    'zh-Hant': {
      eyebrow:'第一階段', title:'留學前準備', lead:'從選擇學校到取得簽證，先把重要步驟排成自己的時間表。',
      sections:[
        {title:'1. 確認留學目的與學校種類', intro:'先想清楚「想學什麼、畢業後想做什麼」，再比較不同教育機構。', cards:[
          ['日本語言學校','提升日語能力，準備升學或在日本生活。確認課程期間、升學支援與是否為合格機構。'],
          ['專門學校','以職業技能與實務訓練為主，例如 IT、設計、觀光、商務與照護。'],
          ['大學／短期大學','取得學位並接受較廣泛的專業教育。入學條件與考試方式因學校而異。'],
          ['研究所','修讀碩士或博士課程。通常需要研究計畫、指導教授聯絡與語言能力證明。']
        ]},
        {title:'2. 準備申請文件', intro:'各校要求不同，請以招生簡章為準。常見文件包括：', bullets:['入學申請書與照片','畢業證明、在學證明與成績單','日語或英語能力證明（例如 JLPT、EJU、TOEFL、IELTS）','讀書／研究計畫與推薦信','經費支付能力證明','護照影本與其他學校指定資料'], notice:'文件名稱、翻譯、公證和有效期限可能不同。最好建立一張「學校 × 文件 × 截止日」表格。'},
        {title:'3. 建立申請時間表', intro:'以下為一般參考，實際時程依入學月份、學校與考試而不同。', timeline:[
          ['約 12 個月前','確認領域與預算，蒐集多所學校資料。'],['約 10～9 個月前','比較招生條件，準備語言檢定或 EJU。'],['約 8～6 個月前','提交申請資料、研究計畫或作品集。'],['約 5～2 個月前','參加入學考試、面試並等待結果。'],['錄取後','完成學費手續，準備 COE、簽證、住宿與機票。']
        ]},
        {title:'4. 經費與獎學金', intro:'除了學費，也要估算住宿、飲食、交通、保險、教材和初期安家費。', bullets:['不要把獎學金當成唯一經費來源，多數獎學金屬於部分補助。','確認學校是否有學費減免、校內獎學金或推薦制度。','申請條件與截止日每年可能變更，應查看學校與官方最新資料。']},
        {title:'5. COE 與留學簽證', intro:'一般流程是先取得學校錄取，再由學校或申請人辦理在留資格認定證明書（COE），之後向日本駐外使領館申請簽證。', bullets:['錄取通知不等於簽證核發。','準備經費證明時，內容必須真實且能說明資金來源。','取得簽證後，確認姓名、護照號碼、有效期限與入境期限。'], notice:'個案所需文件可能不同。請以學校、日本駐外使領館與出入國在留管理廳的最新說明為準。'}
      ]
    },
    'zh-Hans': {
      eyebrow:'第一阶段', title:'留学前准备', lead:'从选择学校到取得签证，先把重要步骤排成自己的时间表。',
      sections:[
        {title:'1. 确认留学目的与学校种类', intro:'先想清楚“想学什么、毕业后想做什么”，再比较不同教育机构。', cards:[['日语学校','提高日语能力，为升学或在日本生活做准备。确认课程期间、升学支持及机构资格。'],['专门学校','以职业技能与实务训练为主，例如 IT、设计、观光、商务与护理。'],['大学／短期大学','取得学位并接受较广泛的专业教育。入学条件与考试方式因学校而异。'],['研究生院','攻读硕士或博士课程。通常需要研究计划、联系指导教授与语言能力证明。']]},
        {title:'2. 准备申请文件', intro:'各校要求不同，请以招生简章为准。常见文件包括：', bullets:['入学申请书与照片','毕业证明、在学证明与成绩单','日语或英语能力证明（例如 JLPT、EJU、TOEFL、IELTS）','学习／研究计划与推荐信','经费支付能力证明','护照复印件与其他学校指定资料'], notice:'文件名称、翻译、公证和有效期限可能不同。最好建立一张“学校 × 文件 × 截止日”表格。'},
        {title:'3. 建立申请时间表', intro:'以下为一般参考，实际时间依入学月份、学校与考试而不同。', timeline:[['约 12 个月前','确认领域与预算，收集多所学校资料。'],['约 10～9 个月前','比较招生条件，准备语言考试或 EJU。'],['约 8～6 个月前','提交申请资料、研究计划或作品集。'],['约 5～2 个月前','参加入学考试、面试并等待结果。'],['录取后','完成学费手续，准备 COE、签证、住宿与机票。']]},
        {title:'4. 经费与奖学金', intro:'除了学费，也要估算住宿、饮食、交通、保险、教材和初期安家费。', bullets:['不要把奖学金当成唯一经费来源，多数奖学金属于部分补助。','确认学校是否有学费减免、校内奖学金或推荐制度。','申请条件与截止日期每年可能变化，应查看学校与官方最新资料。']},
        {title:'5. COE 与留学签证', intro:'一般流程是先取得学校录取，再由学校或申请人办理在留资格认定证明书（COE），之后向日本驻外使领馆申请签证。', bullets:['录取通知不等于签证核发。','准备经费证明时，内容必须真实且能说明资金来源。','取得签证后，确认姓名、护照号码、有效期限与入境期限。'], notice:'个案所需文件可能不同。请以学校、日本驻外使领馆与出入国在留管理厅的最新说明为准。'}
      ]
    },
    'ja': {
      eyebrow:'ステージ1', title:'留学前の準備', lead:'学校選びからビザ取得まで、重要な手続きを自分のスケジュールに整理しましょう。',
      sections:[
        {title:'1. 留学目的と学校の種類を確認する', intro:'「何を学びたいか」「卒業後に何をしたいか」を考え、教育機関を比較します。', cards:[['日本語教育機関','日本語力を伸ばし、進学や日本での生活に備えます。コース期間や進学支援、機関の情報を確認します。'],['専門学校','IT、デザイン、観光、ビジネス、介護など、職業に必要な実践的な知識と技能を学びます。'],['大学・短期大学','学位取得を目指し、専門分野を幅広く学びます。入試方法や条件は学校ごとに異なります。'],['大学院','修士・博士課程で研究します。研究計画書、指導希望教員への連絡、語学力証明などが必要になることがあります。']]},
        {title:'2. 出願書類を準備する', intro:'必要書類は学校によって異なります。必ず募集要項を確認してください。', bullets:['入学願書・写真','卒業証明書、在学証明書、成績証明書','日本語・英語能力証明（JLPT、EJU、TOEFL、IELTS など）','志望理由書・研究計画書・推薦状','経費支弁能力を示す資料','パスポートの写し、学校指定の追加書類'], notice:'翻訳、公証、有効期限などの条件も異なります。「学校 × 書類 × 締切」の一覧表を作ると安全です。'},
        {title:'3. 出願スケジュールを作る', intro:'次は一般的な目安です。入学時期、学校、試験によって異なります。', timeline:[['約12か月前','分野と予算を決め、複数校の情報を集めます。'],['約10～9か月前','出願条件を比較し、語学試験やEJUを準備します。'],['約8～6か月前','願書、研究計画書、作品集などを提出します。'],['約5～2か月前','入学試験や面接を受け、結果を待ちます。'],['合格後','学費手続き、COE、ビザ、住居、航空券を準備します。']]},
        {title:'4. 学費・生活費・奨学金', intro:'学費だけでなく、住居、食費、交通、保険、教材、初期費用も見積もります。', bullets:['奨学金だけに頼らない資金計画を作ります。多くは費用の一部を支援する制度です。','学校独自の奨学金、授業料減免、推薦制度を確認します。','条件や締切は年度ごとに変わる可能性があるため、最新情報を確認します。']},
        {title:'5. COEと留学ビザ', intro:'一般的には、学校の合格後に在留資格認定証明書（COE）を申請し、その後、日本の在外公館でビザを申請します。', bullets:['合格通知だけでビザが発給されるわけではありません。','経費支弁資料は事実に基づき、資金の出所を説明できるようにします。','ビザ取得後は、氏名、旅券番号、有効期限、入国期限を確認します。'], notice:'必要書類は個人の状況で異なります。学校、在外公館、出入国在留管理庁の最新案内をご確認ください。'}
      ]
    },
    'en': {
      eyebrow:'Stage 1', title:'Before You Study', lead:'From choosing a school to receiving a visa, turn the major steps into your own timeline.',
      sections:[
        {title:'1. Define your goal and school type', intro:'Start with what you want to learn and what you hope to do after graduation, then compare institutions.', cards:[['Japanese language institute','Build Japanese ability for further study or daily life. Check course length, progression support, and institutional information.'],['Professional training college','Learn job-focused skills in fields such as IT, design, tourism, business, or care work.'],['University / junior college','Earn a degree through broad and specialized education. Requirements and examinations vary by school.'],['Graduate school','Pursue a master’s or doctoral degree. A research proposal, supervisor contact, and language evidence may be required.']]},
        {title:'2. Prepare application documents', intro:'Requirements differ by school. Always follow the official admissions guide.', bullets:['Application form and photograph','Graduation, enrollment, and academic transcripts','Japanese or English test results, such as JLPT, EJU, TOEFL, or IELTS','Statement of purpose, research plan, and recommendations','Evidence of financial support','Passport copy and any school-specific documents'], notice:'Translation, notarization, and validity rules may differ. A “school × document × deadline” table helps prevent mistakes.'},
        {title:'3. Build an application timeline', intro:'This is a general example. Actual timing depends on the intake, school, and examination.', timeline:[['About 12 months before','Choose a field and budget, then collect information from several schools.'],['About 10–9 months before','Compare requirements and prepare language tests or EJU.'],['About 8–6 months before','Submit applications, research plans, or portfolios.'],['About 5–2 months before','Take entrance examinations or interviews and wait for results.'],['After admission','Complete tuition steps and arrange the COE, visa, housing, and flight.']]},
        {title:'4. Costs and scholarships', intro:'Budget for tuition, housing, food, transport, insurance, materials, and initial setup costs.', bullets:['Do not treat a scholarship as your only funding source; many provide partial support.','Check school-based scholarships, tuition reductions, and nomination systems.','Requirements and deadlines may change each year, so use the latest official information.']},
        {title:'5. COE and student visa', intro:'A common process is admission first, then a Certificate of Eligibility (COE), followed by a visa application at a Japanese embassy or consulate.', bullets:['An admission letter does not itself guarantee a visa.','Financial evidence must be truthful and clearly explain the source of funds.','After receiving the visa, check your name, passport number, validity, and entry deadline.'], notice:'Documents vary by individual case. Follow current guidance from your school, Japanese diplomatic mission, and the Immigration Services Agency.'}
      ]
    }
  },
  arrival: {
    'zh-Hant': {
      eyebrow:'第二階段', title:'抵達日本後', lead:'抵達後先處理身份、地址、保險與通訊，再慢慢熟悉生活環境。',
      sections:[
        {title:'1. 入境與在留卡', intro:'中長期居留者通常會取得在留卡。從部分主要機場入境時可在機場領取，其他機場可能在完成住民登錄後郵寄。', bullets:['核對在留卡上的姓名、在留資格與在留期限。','在留卡是重要身分證明，依法需要隨身攜帶。','護照、在留卡與學校文件應分開備份，並保存電子影本。']},
        {title:'2. 住民登錄', intro:'確定住址後，原則上應在 14 天內到居住地的市役所、區役所或町村役場辦理住民登錄。', cards:[['常見攜帶物','在留卡或註記「之後交付在留卡」的護照、住址資料及市役所要求的文件。'],['完成後','地址會記載在在留卡上，之後可辦理健康保險、銀行、手機等手續。']]},
        {title:'3. 國民健康保險與 My Number', intro:'在日本停留三個月以上的外國居民通常需要加入國民健康保險。完成住民登錄後，可在同一市役所詢問辦理。', bullets:['保費與收入及居住地等因素有關。','My Number 通知通常會寄到登記地址，請妥善保管。','搬家時需要辦理轉出、轉入或地址變更相關手續。']},
        {title:'4. 銀行、手機與生活基礎', intro:'不同銀行與電信公司的審查、方案和必要文件不同。剛入境時可能需要先使用較簡單的方案。', bullets:['準備在留卡、護照、學生證、住址與日本電話號碼（依機構要求）。','不要把銀行帳戶、提款卡或手機門號借給他人。','簽約前確認解約費、最低使用期間與自動續約條件。']},
        {title:'5. 入境後兩週建議順序', timeline:[['第 1～2 天','確認宿舍或住所、聯絡學校、整理重要文件。'],['第 2～7 天','完成住民登錄、國民健康保險等市役所手續。'],['第 1 週','參加學校說明會、確認課程與學生支援窗口。'],['第 1～2 週','處理手機、銀行、交通卡與生活用品。'],['需要打工時','先確認是否取得資格外活動許可，以及學校規定。']]}
      ]
    },
    'zh-Hans': {
      eyebrow:'第二阶段', title:'抵达日本后', lead:'抵达后先处理身份、地址、保险与通信，再逐渐熟悉生活环境。',
      sections:[
        {title:'1. 入境与在留卡', intro:'中长期居留者通常会取得在留卡。从部分主要机场入境时可在机场领取，其他机场可能在完成住民登记后邮寄。', bullets:['核对在留卡上的姓名、在留资格与在留期限。','在留卡是重要身份证明，依法需要随身携带。','护照、在留卡与学校文件应分开备份，并保存电子副本。']},
        {title:'2. 住民登记', intro:'确定住址后，原则上应在 14 天内到居住地的市役所、区役所或町村役场办理住民登记。', cards:[['常见携带物','在留卡或标注“之后交付在留卡”的护照、住址资料及市役所要求的文件。'],['完成后','地址会记载在在留卡上，之后可办理健康保险、银行、手机等手续。']]},
        {title:'3. 国民健康保险与 My Number', intro:'在日本停留三个月以上的外国居民通常需要加入国民健康保险。完成住民登记后，可在同一市役所咨询办理。', bullets:['保费与收入及居住地等因素有关。','My Number 通知通常会寄到登记地址，请妥善保管。','搬家时需要办理迁出、迁入或地址变更手续。']},
        {title:'4. 银行、手机与生活基础', intro:'不同银行与电信公司的审查、方案和必要文件不同。刚入境时可能需要先使用较简单的方案。', bullets:['准备在留卡、护照、学生证、住址与日本电话号码（依机构要求）。','不要把银行账户、提款卡或手机号码借给他人。','签约前确认解约费、最低使用期间与自动续约条件。']},
        {title:'5. 入境后两周建议顺序', timeline:[['第 1～2 天','确认宿舍或住所、联系学校、整理重要文件。'],['第 2～7 天','完成住民登记、国民健康保险等市役所手续。'],['第 1 周','参加学校说明会、确认课程与学生支持窗口。'],['第 1～2 周','处理手机、银行、交通卡与生活用品。'],['需要打工时','先确认是否取得资格外活动许可，以及学校规定。']]}
      ]
    },
    'ja': {
      eyebrow:'ステージ2', title:'日本到着後', lead:'到着後は、身分・住所・保険・通信の手続きを優先し、少しずつ生活環境を整えます。',
      sections:[
        {title:'1. 入国と在留カード', intro:'中長期在留者には通常、在留カードが交付されます。主要空港では入国時に交付され、その他の空港では住居地の届出後に郵送される場合があります。', bullets:['氏名、在留資格、在留期間を確認します。','在留カードは重要な身分証明書で、携帯義務があります。','パスポート、在留カード、学校書類のコピーや電子データを別に保管します。']},
        {title:'2. 住居地の届出', intro:'住居地を定めた日から原則14日以内に、市区町村の窓口で住居地の届出を行います。', cards:[['持ち物の例','在留カード、または「在留カード後日交付」の記載があるパスポート、住所情報、市区町村が指定する書類。'],['手続き後','在留カードに住所が記載され、健康保険、銀行、携帯電話などの手続きが進めやすくなります。']]},
        {title:'3. 国民健康保険とマイナンバー', intro:'日本に3か月を超えて滞在する外国人住民は、原則として国民健康保険に加入します。住民登録後、市区町村の窓口で確認してください。', bullets:['保険料は前年所得や自治体などにより異なります。','マイナンバーの通知は登録住所へ届くため、大切に保管します。','引っ越し時は転出・転入・住所変更の手続きが必要です。']},
        {title:'4. 銀行・携帯電話・生活基盤', intro:'銀行や通信会社により審査、プラン、必要書類が異なります。入国直後は利用できるサービスが限られる場合があります。', bullets:['在留カード、パスポート、学生証、住所、日本の電話番号などを準備します。','銀行口座、キャッシュカード、携帯電話を他人に貸してはいけません。','契約前に解約料、最低利用期間、自動更新を確認します。']},
        {title:'5. 到着後2週間の目安', timeline:[['1～2日目','住居を確認し、学校へ連絡し、重要書類を整理します。'],['2～7日目','住居地の届出、国民健康保険など市区町村の手続きを行います。'],['1週目','学校のオリエンテーションに参加し、授業と相談窓口を確認します。'],['1～2週目','携帯電話、銀行、交通系ICカード、生活用品を準備します。'],['アルバイトをする場合','資格外活動許可と学校のルールを必ず確認します。']]}
      ]
    },
    'en': {
      eyebrow:'Stage 2', title:'After Arrival', lead:'Handle identity, address, insurance, and communication first, then settle into daily life step by step.',
      sections:[
        {title:'1. Entry and residence card', intro:'Mid- to long-term residents generally receive a residence card. It may be issued at selected major airports or mailed after resident registration when entering through another airport.', bullets:['Check your name, status of residence, and period of stay.','The residence card is an important ID and must generally be carried.','Keep separate paper and digital copies of your passport, residence card, and school documents.']},
        {title:'2. Register your address', intro:'After establishing a place of residence, you generally need to notify the local municipal office within 14 days.', cards:[['Typical documents','Residence card, or a passport marked for later issuance of the residence card, address information, and documents requested by the municipality.'],['After registration','Your address is recorded and you can proceed with health insurance, banking, mobile service, and other tasks.']]},
        {title:'3. National Health Insurance and My Number', intro:'Foreign residents staying in Japan for more than three months generally need to join National Health Insurance. Ask at the municipal office after resident registration.', bullets:['Premiums depend on factors such as income and municipality.','Your My Number notice is generally mailed to your registered address; keep it secure.','When moving, complete the required moving-out, moving-in, or address-change procedures.']},
        {title:'4. Banking, mobile service, and essentials', intro:'Screening, plans, and documents vary by bank and telecom provider. Options may be limited immediately after arrival.', bullets:['Prepare your residence card, passport, student ID, address, and Japanese phone number as required.','Never lend your bank account, cash card, or mobile number to another person.','Before signing, check cancellation fees, minimum terms, and automatic renewal.']},
        {title:'5. Suggested first-two-week order', timeline:[['Days 1–2','Confirm housing, contact your school, and organize key documents.'],['Days 2–7','Complete resident registration and National Health Insurance procedures.'],['Week 1','Attend school orientation and identify course and student-support contacts.'],['Weeks 1–2','Arrange mobile service, banking, transport cards, and daily necessities.'],['Before part-time work','Confirm permission to work outside your status and any school rules.']]}
      ]
    }
  },
  life: {
    'zh-Hant': {
      eyebrow:'第三階段', title:'日本生活', lead:'把住宿、交通、醫療、打工與安全的基本規則先弄懂，生活會安心很多。',
      sections:[
        {title:'1. 住宿與鄰里生活', cards:[['租屋合約','確認初期費用、保證人／保證公司、更新費、退房規則、禁止事項與設備責任。'],['垃圾分類','垃圾分類與收集日由各自治體規定。下載所在地的垃圾日曆，使用指定垃圾袋。'],['生活噪音','日本住宅隔音可能有限。深夜避免洗衣、吸塵、大聲通話或播放音樂。'],['搬家','先通知房東與水電瓦斯公司，並辦理市役所地址、郵件轉寄及學校資料更新。']]},
        {title:'2. 交通與通學', bullets:['確認定期券、學生折扣與學校指定的通學路線。','自行車需要遵守交通規則，部分地區要求加入自行車保險。','不要使用他人的記名交通卡或學生定期券。','末班車後的交通費可能很高，外出前先確認回程。']},
        {title:'3. 醫療與保險', intro:'不舒服時，可先詢問學校保健室、附近診所或所在地的醫療諮詢窗口。', bullets:['帶上健康保險資格確認文件、在留卡與服用中的藥物資訊。','大型醫院可能需要轉診或產生額外費用，非緊急情況可先找診所。','緊急救護請撥 119；是否需要救護車應依實際緊急程度判斷。']},
        {title:'4. 打工注意事項', intro:'持「留學」在留資格者，從事有報酬活動前通常需要取得資格外活動許可。一般許可常見上限為上課期間每週 28 小時，但個人許可內容與禁止業種必須以在留卡、許可文件及官方規定為準。', bullets:['學業是留學在留資格的主要活動，避免因打工影響出席與成績。','保留雇用契約、薪資明細與排班紀錄。','不要接受未簽約、代收代付、借用帳戶或身分不明的高薪工作。'], notice:'風俗相關業種等即使不直接從事接客服務，也可能屬禁止範圍。工作前請確認官方規定。'},
        {title:'5. 災害與緊急狀況', cards:[['地震','先保護頭部、遠離倒落物，搖晃停止後確認出口與火源。'],['颱風與豪雨','查看氣象與自治體避難資訊，不要靠近河川、山坡或淹水道路。'],['重要電話','警察 110、消防／救護 119。非緊急問題可使用所在地的諮詢服務。'],['防災準備','備妥飲水、簡易食物、行動電源、手電筒、常用藥與證件影本。']]}
      ]
    },
    'zh-Hans': {
      eyebrow:'第三阶段', title:'日本生活', lead:'先了解住宿、交通、医疗、打工与安全的基本规则，生活会安心很多。',
      sections:[
        {title:'1. 住宿与邻里生活', cards:[['租房合同','确认初期费用、保证人／保证公司、更新费、退房规则、禁止事项与设备责任。'],['垃圾分类','垃圾分类与收集日由各自治体规定。下载所在地的垃圾日历，使用指定垃圾袋。'],['生活噪音','日本住宅隔音可能有限。深夜避免洗衣、吸尘、大声通话或播放音乐。'],['搬家','先通知房东与水电煤气公司，并办理市役所地址、邮件转寄及学校资料更新。']]},
        {title:'2. 交通与通学', bullets:['确认定期券、学生折扣与学校指定的通学路线。','骑自行车需要遵守交通规则，部分地区要求加入自行车保险。','不要使用他人的记名交通卡或学生定期券。','末班车后的交通费可能很高，外出前先确认回程。']},
        {title:'3. 医疗与保险', intro:'身体不适时，可先咨询学校保健室、附近诊所或所在地的医疗咨询窗口。', bullets:['带上健康保险资格确认文件、在留卡与正在服用的药物信息。','大型医院可能需要转诊或产生额外费用，非紧急情况可先找诊所。','紧急救护请拨 119；是否需要救护车应根据实际紧急程度判断。']},
        {title:'4. 打工注意事项', intro:'持“留学”在留资格者，从事有报酬活动前通常需要取得资格外活动许可。一般许可常见上限为上课期间每周 28 小时，但个人许可内容与禁止行业必须以在留卡、许可文件及官方规定为准。', bullets:['学业是留学在留资格的主要活动，避免因打工影响出勤与成绩。','保留雇用合同、工资明细与排班记录。','不要接受未签约、代收代付、借用账户或身份不明的高薪工作。'], notice:'风俗相关行业等即使不直接接待客人，也可能属于禁止范围。工作前请确认官方规定。'},
        {title:'5. 灾害与紧急情况', cards:[['地震','先保护头部、远离倒落物，摇晃停止后确认出口与火源。'],['台风与暴雨','查看气象与自治体避难信息，不要靠近河流、山坡或积水道路。'],['重要电话','警察 110、消防／救护 119。非紧急问题可使用所在地咨询服务。'],['防灾准备','准备饮水、简单食品、移动电源、手电筒、常用药与证件副本。']]}
      ]
    },
    'ja': {
      eyebrow:'ステージ3', title:'日本での生活', lead:'住居、交通、医療、アルバイト、防災の基本ルールを知ると、安心して生活できます。',
      sections:[
        {title:'1. 住居と近隣生活', cards:[['賃貸契約','初期費用、保証人・保証会社、更新料、退去条件、禁止事項、設備の責任を確認します。'],['ごみ分別','分別方法と収集日は自治体ごとに異なります。ごみカレンダーと指定袋を確認します。'],['生活音','住宅の防音性能は建物により異なります。深夜の洗濯、掃除、大声、音楽を控えます。'],['引っ越し','家主、電気・ガス・水道へ連絡し、住所、郵便転送、学校情報を更新します。']]},
        {title:'2. 交通と通学', bullets:['通学定期券、学割、学校が認める通学経路を確認します。','自転車も交通ルールの対象です。地域によって自転車保険への加入が求められます。','他人の記名式ICカードや通学定期券を使用してはいけません。','終電後の移動費は高くなるため、帰宅手段を事前に確認します。']},
        {title:'3. 医療と保険', intro:'体調が悪いときは、学校の保健室、近くのクリニック、地域の医療相談窓口を利用できます。', bullets:['健康保険の資格確認書類、在留カード、服用中の薬の情報を持参します。','大病院は紹介状が必要な場合や追加費用が発生する場合があります。緊急でなければクリニックから受診します。','救急・消防は119です。救急車は緊急性に応じて利用します。']},
        {title:'4. アルバイトの注意', intro:'「留学」の在留資格で報酬を得る活動をする場合、通常は資格外活動許可が必要です。包括許可では授業期間中に週28時間以内が一般的ですが、本人の許可内容、禁止される業種、最新ルールを必ず確認してください。', bullets:['留学の主な活動は学業です。出席や成績に影響しないようにします。','雇用契約書、給与明細、シフト記録を保管します。','契約のない仕事、口座の貸与、代金受取、正体不明の高収入案件は避けます。'], notice:'風俗営業に関係する業務は、接客を直接行わなくても禁止対象になる場合があります。必ず公式情報を確認してください。'},
        {title:'5. 災害と緊急時', cards:[['地震','頭を守り、倒れやすい物から離れます。揺れが止まったら出口と火元を確認します。'],['台風・大雨','気象情報と自治体の避難情報を確認し、川、斜面、冠水道路に近づきません。'],['重要な番号','警察110、消防・救急119。緊急でない相談は地域の相談窓口を利用します。'],['防災用品','水、簡単な食品、モバイルバッテリー、懐中電灯、常備薬、身分証のコピーを準備します。']]}
      ]
    },
    'en': {
      eyebrow:'Stage 3', title:'Life in Japan', lead:'Understanding the basics of housing, transport, healthcare, work, and safety makes daily life much easier.',
      sections:[
        {title:'1. Housing and neighborhood life', cards:[['Rental contract','Check initial costs, guarantor arrangements, renewal fees, move-out rules, prohibited activities, and responsibility for equipment.'],['Waste separation','Sorting and collection days are set by each municipality. Use the local waste calendar and designated bags.'],['Noise','Sound insulation varies by building. Avoid late-night laundry, vacuuming, loud calls, or music.'],['Moving','Notify the landlord and utilities, then update your municipal address, mail forwarding, and school information.']]},
        {title:'2. Transport and commuting', bullets:['Confirm commuter passes, student discounts, and any school-approved commuting route.','Bicycles are subject to traffic laws, and bicycle insurance is required in some areas.','Do not use another person’s named transit card or student commuter pass.','Transport can be expensive after the last train, so plan your return journey.']},
        {title:'3. Healthcare and insurance', intro:'When you feel unwell, ask your school health office, a nearby clinic, or a local medical consultation service.', bullets:['Bring proof of health insurance eligibility, your residence card, and information about current medication.','Large hospitals may require a referral or charge additional fees; for non-emergencies, a clinic is often the first stop.','Call 119 for fire or ambulance emergencies and use an ambulance according to the actual urgency.']},
        {title:'4. Part-time work', intro:'Students with “Student” residence status generally need permission before doing paid work outside their permitted activity. A common comprehensive permission limit is 28 hours per week during class periods, but your own permit, prohibited industries, and current official rules control.', bullets:['Study is the primary activity under student status; do not let work damage attendance or grades.','Keep employment contracts, pay slips, and shift records.','Avoid undocumented work, money-transfer requests, account lending, or suspicious high-pay offers.'], notice:'Work connected to adult entertainment businesses may be prohibited even when the role does not directly serve customers. Check official rules before working.'},
        {title:'5. Disasters and emergencies', cards:[['Earthquake','Protect your head and move away from falling objects. After shaking stops, check exits and fire sources.'],['Typhoon and heavy rain','Follow weather and municipal evacuation information. Stay away from rivers, slopes, and flooded roads.'],['Key numbers','Police: 110. Fire and ambulance: 119. Use local consultation lines for non-emergencies.'],['Emergency kit','Prepare water, simple food, a power bank, flashlight, regular medicine, and copies of important ID.']]}
      ]
    }
  },
  career: {
    'zh-Hant': {
      eyebrow:'第四階段', title:'畢業與就職', lead:'日本的求職往往很早開始。先確認方向、整理經歷，再處理在留資格與畢業後手續。',
      sections:[
        {title:'1. 提前開始蒐集資訊', intro:'日本企業的新卒採用常有固定節奏，但公司與產業差異很大。從畢業前一年或更早開始了解也不算太早。', bullets:['參加學校 Career Center、企業說明會與校內招聘活動。','建立企業名單，記錄職種、地點、語言要求、截止日與選考進度。','確認自己想要的是職種、產業、工作內容，還是特定公司。']},
        {title:'2. 準備求職資料', cards:[['履歷書','使用企業指定格式或日本常見格式，確認日期、照片、學歷與聯絡方式。'],['Entry Sheet','用具體經驗說明自我介紹、志望動機、學生時期投入的事情。'],['作品集／GitHub','IT、設計等職種可用作品、程式碼、專案說明展現能力。'],['面試準備','練習 1 分鐘自我介紹、志望理由、團隊經驗、失敗與改善。']]},
        {title:'3. 選考與內定後', timeline:[['企業研究','了解產品、客戶、競爭者、職務與公司文化。'],['書面審查','提交履歷、Entry Sheet、成績或作品。'],['測驗與面試','可能包含適性測驗、筆試、多輪面試或小組討論。'],['內定後','確認工作地點、職務、薪資、加班、試用期與入社日。']]},
        {title:'4. 在留資格變更', intro:'畢業後在日本全職工作，通常需要從「留學」變更為符合工作內容的在留資格。工作內容、學歷與資格的關係會影響審查。', bullets:['不要只依公司口頭說明，確認雇用契約與申請資料。','預留申請時間，並與公司人事、學校與入管局確認。','尚未找到工作時，是否能改為繼續就職活動的在留資格，應依個人條件與最新規定確認。']},
        {title:'5. 回國或離開日本前', bullets:['辦理退租、清潔、鑰匙返還與押金結算。','停止水、電、瓦斯、網路、手機與訂閱服務。','到市役所辦理轉出，處理健康保險、年金與稅務事項。','關閉不再使用的銀行帳戶，確認薪資與退費入帳。','向學校更新聯絡方式，保存畢業證明、成績單與重要文件。']}
      ]
    },
    'zh-Hans': {
      eyebrow:'第四阶段', title:'毕业与就业', lead:'日本的求职往往很早开始。先确认方向、整理经历，再处理在留资格与毕业后手续。',
      sections:[
        {title:'1. 提前开始收集信息', intro:'日本企业的新卒招聘常有固定节奏，但公司与行业差异很大。从毕业前一年或更早开始了解也不算太早。', bullets:['参加学校 Career Center、企业说明会与校内招聘活动。','建立企业清单，记录职种、地点、语言要求、截止日期与选考进度。','确认自己想要的是职种、行业、工作内容，还是特定公司。']},
        {title:'2. 准备求职资料', cards:[['履历书','使用企业指定格式或日本常见格式，确认日期、照片、学历与联系方式。'],['Entry Sheet','用具体经历说明自我介绍、志望动机、学生时期投入的事情。'],['作品集／GitHub','IT、设计等职种可用作品、代码、项目说明展示能力。'],['面试准备','练习 1 分钟自我介绍、志望理由、团队经历、失败与改进。']]},
        {title:'3. 选考与内定后', timeline:[['企业研究','了解产品、客户、竞争者、职务与公司文化。'],['书面审查','提交履历、Entry Sheet、成绩或作品。'],['测验与面试','可能包含适性测验、笔试、多轮面试或小组讨论。'],['内定后','确认工作地点、职务、工资、加班、试用期与入职日期。']]},
        {title:'4. 在留资格变更', intro:'毕业后在日本全职工作，通常需要从“留学”变更为符合工作内容的在留资格。工作内容、学历与资格的关系会影响审查。', bullets:['不要只依赖公司口头说明，确认雇用合同与申请资料。','预留申请时间，并与公司人事、学校及入管局确认。','尚未找到工作时，是否能变更为继续求职活动的在留资格，应依个人条件与最新规定确认。']},
        {title:'5. 回国或离开日本前', bullets:['办理退房、清洁、钥匙归还与押金结算。','停止水、电、煤气、网络、手机与订阅服务。','到市役所办理迁出，处理健康保险、年金与税务事项。','关闭不再使用的银行账户，确认工资与退款到账。','向学校更新联系方式，保存毕业证明、成绩单与重要文件。']}
      ]
    },
    'ja': {
      eyebrow:'ステージ4', title:'卒業・就職', lead:'日本の就職活動は早く始まることがあります。方向性と経験を整理し、在留資格や卒業後の手続きも準備します。',
      sections:[
        {title:'1. 早めに情報を集める', intro:'新卒採用には一定の流れがありますが、企業や業界で時期は異なります。卒業の1年以上前から調べ始めても早すぎません。', bullets:['学校のキャリアセンター、合同説明会、学内イベントを利用します。','企業リストを作り、職種、勤務地、言語条件、締切、選考状況を記録します。','職種、業界、仕事内容、特定企業のどれを優先するか整理します。']},
        {title:'2. 応募書類を準備する', cards:[['履歴書','企業指定または一般的な形式を使い、日付、写真、学歴、連絡先を確認します。'],['エントリーシート','自己PR、志望動機、学生時代に力を入れたことを具体的に書きます。'],['ポートフォリオ・GitHub','ITやデザイン職では、作品、コード、プロジェクト説明で能力を示せます。'],['面接準備','1分自己紹介、志望理由、チーム経験、失敗と改善を練習します。']]},
        {title:'3. 選考から内定まで', timeline:[['企業研究','製品、顧客、競合、職務、社風を理解します。'],['書類選考','履歴書、ES、成績、作品などを提出します。'],['試験・面接','適性検査、筆記試験、複数回面接、グループディスカッションなどがあります。'],['内定後','勤務地、職務、給与、残業、試用期間、入社日を確認します。']]},
        {title:'4. 在留資格の変更', intro:'卒業後に日本でフルタイム就労する場合、通常は「留学」から仕事内容に合う在留資格への変更が必要です。仕事内容、学歴、資格との関連が審査に影響します。', bullets:['会社の口頭説明だけでなく、雇用契約と申請資料を確認します。','申請時間に余裕を持ち、会社の人事、学校、入管に相談します。','就職先が未定の場合、継続就職活動の在留資格へ変更できるか、本人の条件と最新制度を確認します。']},
        {title:'5. 帰国・出国前の手続き', bullets:['退去、清掃、鍵の返却、敷金精算を行います。','電気、ガス、水道、インターネット、携帯、定額サービスを解約します。','市区町村で転出し、健康保険、年金、税金を確認します。','不要な銀行口座を解約し、給与や返金の入金を確認します。','学校へ連絡先を伝え、卒業証明書、成績証明書、重要書類を保管します。']}
      ]
    },
    'en': {
      eyebrow:'Stage 4', title:'Graduation & Career', lead:'Recruitment in Japan can start early. Clarify your direction, organize your experience, and plan residence-status and graduation procedures.',
      sections:[
        {title:'1. Start gathering information early', intro:'New-graduate recruitment often follows a broad cycle, but timing varies greatly by company and industry. Starting a year or more before graduation is reasonable.', bullets:['Use your school career center, company seminars, and on-campus recruitment events.','Build a company tracker with role, location, language requirements, deadlines, and selection status.','Clarify whether you prioritize a role, industry, type of work, or a specific company.']},
        {title:'2. Prepare application materials', cards:[['Japanese résumé','Use the company format or a standard Japanese format, checking dates, photo, education, and contact details.'],['Entry Sheet','Use concrete examples for self-promotion, motivation, and activities you worked hard on as a student.'],['Portfolio / GitHub','For IT and design roles, show work, code, and clear project explanations.'],['Interview preparation','Practice a one-minute introduction, motivation, teamwork, and lessons from failure.']]},
        {title:'3. Selection and offer', timeline:[['Company research','Understand products, customers, competitors, role, and culture.'],['Document screening','Submit a résumé, Entry Sheet, grades, or portfolio.'],['Tests and interviews','Processes may include aptitude tests, written tests, several interviews, or group discussions.'],['After an offer','Confirm location, duties, compensation, overtime, probation, and start date.']]},
        {title:'4. Change of residence status', intro:'Full-time work after graduation generally requires changing from “Student” to a residence status appropriate for the job. The relationship among duties, education, and qualifications can affect review.', bullets:['Do not rely only on verbal explanations; check the employment contract and application documents.','Allow enough time and coordinate with HR, your school, and immigration.','If you have not found a job, check whether you qualify for a status allowing continued job hunting under the latest rules.']},
        {title:'5. Before returning home or leaving Japan', bullets:['Complete move-out, cleaning, key return, and deposit settlement.','Cancel utilities, internet, mobile service, and subscriptions.','File moving-out procedures and check health insurance, pension, and taxes.','Close unused bank accounts after confirming final salary and refunds.','Update your school contact details and keep graduation certificates, transcripts, and key records.']}
      ]
    }
  }
};

const CHECKLIST = {
  'zh-Hant': {
    eyebrow:'實用工具', title:'日本留學準備 Checklist', lead:'完成一項就勾選一項。這份清單是一般參考，請依學校與個人狀況增減。',
    groups:[
      ['選校與申請',[['goal','確定留學目的、希望科系與預算'],['schools','比較至少 3 所學校的課程、費用與地點'],['requirements','確認入學條件、考試與申請截止日'],['documents','準備成績單、畢業證明、語言成績等文件'],['application','完成並送出入學申請']]],
      ['錄取、COE 與簽證',[['offer','確認錄取通知與學費繳納方式'],['coe','依學校指示準備 COE 申請資料'],['visa','取得 COE 後申請留學簽證'],['visa-check','確認簽證資料與入境期限']]],
      ['出發前',[['housing','安排宿舍或租屋'],['flight','購買機票並確認行李規定'],['insurance','確認旅行保險與抵日後健康保險安排'],['copies','備份護照、簽證、COE、錄取通知與緊急聯絡方式'],['money','準備初期生活費與可在日本使用的付款方式'],['medicine','準備常用藥，確認是否需要攜帶證明']]],
      ['抵達後',[['school-contact','向學校報到並參加入學說明'],['resident','確定住址後 14 天內辦理住民登錄'],['nhi','辦理國民健康保險等市役所手續'],['phone','安排手機或網路'],['bank','依需要辦理銀行帳戶'],['transport','準備通學路線與交通卡'],['work-permit','打工前確認資格外活動許可與學校規定']]]
    ]
  },
  'zh-Hans': {
    eyebrow:'实用工具', title:'日本留学准备 Checklist', lead:'完成一项就勾选一项。本清单仅供一般参考，请按学校与个人情况增减。',
    groups:[
      ['选校与申请',[['goal','确定留学目的、希望专业与预算'],['schools','比较至少 3 所学校的课程、费用与地点'],['requirements','确认入学条件、考试与申请截止日期'],['documents','准备成绩单、毕业证明、语言成绩等文件'],['application','完成并提交入学申请']]],
      ['录取、COE 与签证',[['offer','确认录取通知与学费缴纳方式'],['coe','按学校指示准备 COE 申请资料'],['visa','取得 COE 后申请留学签证'],['visa-check','确认签证资料与入境期限']]],
      ['出发前',[['housing','安排宿舍或租房'],['flight','购买机票并确认行李规定'],['insurance','确认旅行保险与抵日后健康保险安排'],['copies','备份护照、签证、COE、录取通知与紧急联系方式'],['money','准备初期生活费与可在日本使用的付款方式'],['medicine','准备常用药，确认是否需要携带证明']]],
      ['抵达后',[['school-contact','向学校报到并参加入学说明'],['resident','确定住址后 14 天内办理住民登记'],['nhi','办理国民健康保险等市役所手续'],['phone','安排手机或网络'],['bank','按需要办理银行账户'],['transport','准备通学路线与交通卡'],['work-permit','打工前确认资格外活动许可与学校规定']]]
    ]
  },
  'ja': {
    eyebrow:'便利な機能', title:'日本留学準備チェックリスト', lead:'完了した項目をチェックしてください。学校や個人の状況に合わせて確認内容を追加してください。',
    groups:[
      ['学校選び・出願',[['goal','留学目的、希望分野、予算を決める'],['schools','少なくとも3校のコース、費用、場所を比較する'],['requirements','出願条件、試験、締切を確認する'],['documents','成績証明書、卒業証明書、語学成績などを準備する'],['application','入学願書を完成し提出する']]],
      ['合格・COE・ビザ',[['offer','合格通知と学費の支払方法を確認する'],['coe','学校の案内に従いCOE申請資料を準備する'],['visa','COE取得後に留学ビザを申請する'],['visa-check','ビザの記載内容と入国期限を確認する']]],
      ['出発前',[['housing','寮または住居を手配する'],['flight','航空券を購入し、手荷物規定を確認する'],['insurance','旅行保険と来日後の健康保険を確認する'],['copies','旅券、ビザ、COE、合格通知、緊急連絡先をバックアップする'],['money','初期費用と日本で使える支払方法を準備する'],['medicine','常備薬を用意し、証明書の要否を確認する']]],
      ['到着後',[['school-contact','学校で手続きを行い、オリエンテーションに参加する'],['resident','住居地を定めてから14日以内に届出を行う'],['nhi','国民健康保険など市区町村の手続きを行う'],['phone','携帯電話またはインターネットを準備する'],['bank','必要に応じて銀行口座を開設する'],['transport','通学経路と交通系ICカードを準備する'],['work-permit','アルバイト前に資格外活動許可と学校ルールを確認する']]]
    ]
  },
  'en': {
    eyebrow:'Useful tool', title:'Japan Study Preparation Checklist', lead:'Check each item as you finish it. This is a general guide, so adjust it for your school and personal situation.',
    groups:[
      ['School selection and application',[['goal','Define your study goal, preferred field, and budget'],['schools','Compare courses, costs, and locations at at least three schools'],['requirements','Check admission requirements, examinations, and deadlines'],['documents','Prepare transcripts, graduation certificates, and language results'],['application','Complete and submit the school application']]],
      ['Admission, COE, and visa',[['offer','Confirm the admission notice and tuition payment method'],['coe','Prepare COE documents following school instructions'],['visa','Apply for a student visa after receiving the COE'],['visa-check','Check visa details and the entry deadline']]],
      ['Before departure',[['housing','Arrange a dormitory or rental housing'],['flight','Buy a flight and check baggage rules'],['insurance','Review travel insurance and health insurance after arrival'],['copies','Back up your passport, visa, COE, admission notice, and emergency contacts'],['money','Prepare initial funds and payment methods that work in Japan'],['medicine','Prepare regular medicine and check whether documents are required']]],
      ['After arrival',[['school-contact','Complete school registration and attend orientation'],['resident','Register your address within 14 days after establishing residence'],['nhi','Complete National Health Insurance and municipal procedures'],['phone','Arrange mobile or internet service'],['bank','Open a bank account if needed'],['transport','Set up your commuting route and transit card'],['work-permit','Before part-time work, confirm work permission and school rules']]]
    ]
  }
};

const SOURCES = {
  'zh-Hant': {
    eyebrow:'資訊透明', title:'資料來源', lead:'本網站以官方網站為主要參考。制度與數字可能更新，請點擊原始來源確認最新內容。',
    cards:[
      ['Study in Japan 官方網站','日本留學整體流程、教育機構、學費、獎學金、生活與就職資訊。','https://www.studyinjapan.go.jp/'],
      ['出入國在留管理廳','在留資格、COE、在留卡、地址申報與資格外活動許可等手續。','https://www.moj.go.jp/isa/'],
      ['日本學生支援機構 JASSO','外國留學生支援、獎學金、EJU 與留學生活相關資料。','https://www.jasso.go.jp/'],
      ['日本外務省','日本簽證與海外使領館資訊。','https://www.mofa.go.jp/'],
      ['厚生勞動省','勞動條件、就業與社會保障相關官方資訊。','https://www.mhlw.go.jp/'],
      ['各地方自治體網站','住民登錄、垃圾分類、避難資訊與地區生活規則應以居住地公告為準。','https://www.gov-online.go.jp/']
    ],
    note:'頁面為學習用途的摘要，不代表任何政府機構。引用或連結不表示官方認可本專案。'
  },
  'zh-Hans': {
    eyebrow:'信息透明', title:'资料来源', lead:'本网站以官方网站为主要参考。制度与数字可能更新，请点击原始来源确认最新内容。',
    cards:[['Study in Japan 官方网站','日本留学整体流程、教育机构、学费、奖学金、生活与就业信息。','https://www.studyinjapan.go.jp/'],['出入国在留管理厅','在留资格、COE、在留卡、地址申报与资格外活动许可等手续。','https://www.moj.go.jp/isa/'],['日本学生支援机构 JASSO','外国留学生支持、奖学金、EJU 与留学生活资料。','https://www.jasso.go.jp/'],['日本外务省','日本签证与海外使领馆信息。','https://www.mofa.go.jp/'],['厚生劳动省','劳动条件、就业与社会保障相关官方信息。','https://www.mhlw.go.jp/'],['各地方自治体网站','住民登记、垃圾分类、避难信息与地区生活规则应以居住地公告为准。','https://www.gov-online.go.jp/']],
    note:'页面是学习用途的摘要，不代表任何政府机构。引用或链接不表示官方认可本项目。'
  },
  'ja': {
    eyebrow:'情報の透明性', title:'情報源', lead:'本サイトは公式ウェブサイトを主な参考資料としています。制度や数値は更新されるため、必ず原文をご確認ください。',
    cards:[['Study in Japan 公式サイト','留学の流れ、教育機関、学費、奨学金、生活、就職に関する情報。','https://www.studyinjapan.go.jp/'],['出入国在留管理庁','在留資格、COE、在留カード、住居地届出、資格外活動許可など。','https://www.moj.go.jp/isa/'],['日本学生支援機構（JASSO）','留学生支援、奨学金、EJU、留学生活に関する資料。','https://www.jasso.go.jp/'],['外務省','日本の査証と在外公館に関する情報。','https://www.mofa.go.jp/'],['厚生労働省','労働条件、雇用、社会保障に関する公式情報。','https://www.mhlw.go.jp/'],['各地方自治体','住民登録、ごみ分別、避難情報、地域ルールは居住地の公式案内をご確認ください。','https://www.gov-online.go.jp/']],
    note:'本サイトは学習目的の要約であり、政府機関を代表するものではありません。リンク掲載は本プロジェクトへの公式な承認を意味しません。'
  },
  'en': {
    eyebrow:'Information transparency', title:'Sources', lead:'This website mainly references official sources. Rules and figures can change, so use the original websites for current information.',
    cards:[['Study in Japan Official Website','Overall study process, institutions, fees, scholarships, life, and career information.','https://www.studyinjapan.go.jp/'],['Immigration Services Agency of Japan','Residence status, COE, residence cards, address notifications, and work-permission procedures.','https://www.moj.go.jp/isa/'],['Japan Student Services Organization (JASSO)','International student support, scholarships, EJU, and study-life resources.','https://www.jasso.go.jp/'],['Ministry of Foreign Affairs of Japan','Japanese visas and overseas diplomatic missions.','https://www.mofa.go.jp/'],['Ministry of Health, Labour and Welfare','Official information on labor conditions, employment, and social security.','https://www.mhlw.go.jp/'],['Local government websites','Resident registration, waste rules, evacuation information, and local procedures depend on your municipality.','https://www.gov-online.go.jp/']],
    note:'This site is a learning-purpose summary and does not represent any government agency. Links do not imply official endorsement of the project.'
  }
};

const TEAM = {
  'zh-Hant': {eyebrow:'關於本專案', title:'小組成員', lead:'本網站由以下 6 位成員共同製作。', role:'網站企劃與製作'},
  'zh-Hans': {eyebrow:'关于本项目', title:'小组成员', lead:'本网站由以下 6 位成员共同制作。', role:'网站策划与制作'},
  'ja': {eyebrow:'プロジェクトについて', title:'グループメンバー', lead:'本サイトは以下の6名で制作しました。', role:'サイト企画・制作'},
  'en': {eyebrow:'About the project', title:'Team Members', lead:'This website was created by the following six team members.', role:'Website planning and development'}
};

const MEMBERS = [
  '蔡璨宇', '周航宇', '劉玉文',
  '楊永茂', '甄培亨', '潘尚奕'
];
