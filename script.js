/**
 * 期末考衝刺系統 - 完整題庫版 (Full Database)
 * 內容來源：Testbank_final-term (Student).docx
 * 設定：Key Terms (中英對照), Quiz (全中文)
 */

// ==========================================
// 1. Key Terms 資料庫 (中英雙語)
// ==========================================
const keyTermsData = [
    {
        id: 1,
        term: "Participative (Democratic) Leadership",
        translation: "參與式(民主)領導",
        [cite_start]desc: "領導者讓員工參與決策、大量授權、鼓勵共同參與決定工作目標與方法，並透過有效的回饋來發展員工能力。領導者像是教練、引導者 [cite: 3]。",
        [cite_start]example: "領導者開會時，先聽取大家意見，再找出大家都同意的決策 [cite: 4]。"
    },
    {
        id: 2,
        term: "Leadership",
        translation: "領導",
        [cite_start]desc: "一個引導團隊、影響團隊以達成目標的過程 [cite: 6]。",
        [cite_start]example: "「風雨過後的指揮官」: 先強調任務分工、行動紀律，同時也親自清理，關懷士兵與居民，最後達成任務目標 [cite: 7]。"
    },
    {
        id: 3,
        term: "Intrinsic motivation",
        translation: "內在動機",
        [cite_start]desc: "個人因為本身的興趣、成就感等而願意去做某件事，即使沒有外在獎勵也願意 [cite: 9]。",
        [cite_start]example: "在畫畫前告知畫完會有獎勵，結果未畫完；即使之後不給獎勵了，還是會繼續畫完的人 [cite: 10]。"
    },
    {
        id: 4,
        term: "Extrinsic motivation",
        translation: "外在動機",
        [cite_start]desc: "個人因為想獲得外部獎賞或避免懲罰而進行某行為，不是發自內心想去做，而是因為有「誘因」或「壓力」才做 [cite: 12]。",
        [cite_start]example: "在畫畫前告知畫完會有獎勵，結果為畫完，但在之後不給獎勵後，就不畫了 [cite: 13]。"
    },
    {
        id: 5,
        term: "Training and development",
        translation: "訓練與發展",
        [cite_start]desc: "訓練著重目前工作上所需之知識與技能(短期)；發展著重於員工個人成長與未來能力(長期) [cite: 15]。",
        [cite_start]example: "訓練: 系統/機器操作；發展: 帶團隊(領導課程) [cite: 16]。"
    },
    {
        id: 6,
        term: "Cafeteria benefit plans",
        translation: "自助餐式福利計劃",
        [cite_start]desc: "企業提供一套基本福利，由員工依照自己的需求狀況，在一定額度內點選它們所需的額外福利 [cite: 18]。",
        [cite_start]example: "員工可以在額度內選擇進修補助、健身房補助、保險或子女教育津貼等 [cite: 19]。"
    },
    {
        id: 7,
        term: "Marketing mix",
        translation: "行銷組合",
        [cite_start]desc: "包含 Product(產品) + Price(價格) + Place(通路) + Promotion(推廣) [cite: 21]。",
        [cite_start]example: "星巴克：Product(放鬆氛圍)、Price(中高價)、Place(市區/APP)、Promotion(買一送一) [cite: 23-26]。"
    },
    {
        id: 8,
        term: "Segmentation",
        translation: "市場區隔",
        [cite_start]desc: "針對目標市場，依照變數(人口/地理/心理/行為)進行區隔。將大異質市場變為小同質市場 [cite: 28]。",
        [cite_start]example: "Netflix 使用行為區隔來根據觀眾的觀看習慣推薦內容 [cite: 29]。"
    },
    {
        id: 9,
        term: "Positioning",
        translation: "產品定位",
        [cite_start]desc: "定義品牌價值並與對手差異化，在顧客心中佔有獨特位置，讓顧客知道「為什麼要選你」 [cite: 31]。",
        [cite_start]example: "價格定位；以價格差異建立競爭優勢(如廉價航空) [cite: 32]。"
    },
    {
        id: 10,
        term: "Marketing",
        translation: "行銷",
        [cite_start]desc: "一套包含創造、溝通與傳達價值給對方的程序。重點在於先確定顧客需要，才去生產符合需要的產品 [cite: 34]。",
        [cite_start]example: "保險公司根據疫情趨勢與顧客焦慮，設計防疫表單並透過多通路推廣 [cite: 35]。"
    },
    {
        id: 11,
        term: "The product life cycle",
        translation: "產品生命週期",
        [cite_start]desc: "產品從導入期(Introduction)、成長期(Growth)、成熟期(Maturity)到衰退期(Decline)的過程 [cite: 37]。",
        example: "導入: Vision Pro; 成長: 摺疊機; 成熟: iPhone; [cite_start]衰退: iPod [cite: 39-42]。"
    }
];

// ==========================================
// 2. 測驗資料庫 (全中文)
// ==========================================
const quizData = [
    // --- True / False (Ch7) ---
    {
        id: 101, type: "tf", category: "Ch7 管理",
        question: "四項主要的管理職能為規劃、組織、領導與控制。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 45]。這是管理學的四大基礎職能。"
    },
    {
        id: 102, type: "tf", category: "Ch7 管理",
        question: "領導職能的一項趨勢是授權員工，讓他們擁有盡可能多的自由，以便自我引導並自我激勵。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 46]。現代領導趨向賦權 (Empowerment)。"
    },
    {
        id: 103, type: "tf", category: "Ch7 管理",
        question: "一個擅長基層管理的人，自然也有可能成為優秀的中階或高階主管。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 47]。不同層級所需的技能不同（如高層更需要概念化技能）。"
    },
    {
        id: 104, type: "tf", category: "Ch7 管理",
        question: "人際關係技巧包含與領導、指導、士氣建立及支持性有關的能力。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 48]。"
    },
    {
        id: 105, type: "tf", category: "Ch7 管理",
        question: "經理人與領導者的差異之一是：經理人追求穩定，而領導者擁抱變革。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 49]。"
    },
    {
        id: 106, type: "tf", category: "Ch7 管理",
        question: "專制型領導者的特質包含溫暖、友善與合作。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 50]。這些通常是民主或參與式領導的特質。"
    },
    {
        id: 107, type: "tf", category: "Ch7 管理",
        question: "專制式領導最適合喜歡獨立工作並自行決策的員工。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 51]。喜歡獨立的員工適合放任式領導。"
    },
    {
        id: 108, type: "tf", category: "Ch7 管理",
        question: "當經理人對所有員工都一貫使用相同的領導風格時，會達到最佳管理效果。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 52]。應採用情境領導，視對象調整風格。"
    },
    {
        id: 109, type: "tf", category: "Ch7 管理",
        question: "Daylon 反應迅速且果斷，大多自行決策、下達命令。這種行為屬於自由放任式領導風格。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 54]。自行決策與下令屬於專制式 (Autocratic) 風格。"
    },
    {
        id: 110, type: "tf", category: "Ch7 管理",
        question: "若經理人能妥善進行規劃與組織，就不需要再參與控制工作。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 55]。控制是為了確保成果符合計畫，必不可少。"
    },

    // --- True / False (Ch10) ---
    {
        id: 111, type: "tf", category: "Ch10 動機",
        question: "由於動機源自個人內在，管理者能協助員工提升動機的空間非常有限。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 57]。管理者可透過激勵機制顯著影響員工。"
    },
    {
        id: 112, type: "tf", category: "Ch10 動機",
        question: "霍桑研究指出，若給予員工在工作中批判思考的機會，態度會有明顯改善。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 58]。關注員工心理與社會面能提升表現。"
    },
    {
        id: 113, type: "tf", category: "Ch10 動機",
        question: "依據馬斯洛理論，人們會先滿足低層次需求，之後才會追求高層次需求。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 59]。"
    },
    {
        id: 114, type: "tf", category: "Ch10 動機",
        question: "根據公平理論，若感覺情況不公，員工會試圖透過減少努力等方式來恢復公平。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 60]。"
    },
    {
        id: 115, type: "tf", category: "Ch10 動機",
        question: "在運用開放式溝通激勵員工時，最好保持訊息模糊不清。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 61]。溝通應清晰透明。"
    },
    {
        id: 116, type: "tf", category: "Ch10 動機",
        question: "作為激勵技巧，讓員工知道自己表現良好比發放獎金的效果更弱。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 62]。讚賞與認可往往是非常強大的激勵因子。"
    },
    {
        id: 117, type: "tf", category: "Ch10 動機",
        question: "覺得不被重視是人們離職的常見原因之一。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 63]。"
    },
    {
        id: 118, type: "tf", category: "Ch10 動機",
        question: "Gavan 希望促進開放的雙向溝通，他能做的最重要事情之一就是成為一位善於傾聽的人。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 65]。"
    },
    {
        id: 119, type: "tf", category: "Ch10 動機",
        question: "不論文化背景為何，大多數員工對激勵方式的反應都相同。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 66]。文化差異會影響對激勵的反應。"
    },
    {
        id: 120, type: "tf", category: "Ch10 動機",
        question: "在面對當今文化多元的勞動力時，管理者應對所有人採取一致的激勵方式。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 67]。應採取客製化與具備文化敏感度的激勵方式。"
    },

    // --- True / False (Ch11) ---
    {
        id: 121, type: "tf", category: "Ch11 人資",
        question: "人力資源工作聚焦在與職務與工作現場直接相關的議題，而不像長照或托育這類雖影響工作、但不直接屬於工作的事項。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 69]。現代 HR 也關注員工的工作生活平衡與家庭福利。"
    },
    {
        id: 122, type: "tf", category: "Ch11 人資",
        question: "和其他管理領域一樣，人力資源管理由規劃開始。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 70]。"
    },
    {
        id: 123, type: "tf", category: "Ch11 人資",
        question: "人力資源規劃需要同時評估組織未來對各類勞動力的需求，以及未來或目前的人力供給狀況。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 71]。"
    },
    {
        id: 124, type: "tf", category: "Ch11 人資",
        question: "在招募時，人資需吸引具備合適技能且能與企業文化與領導風格契合的人才。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 72]。"
    },
    {
        id: 125, type: "tf", category: "Ch11 人資",
        question: "甄選是在法規框架下蒐集資訊並決定錄用人選，使結果符合個人與組織的最大利益。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 73]。"
    },
    {
        id: 126, type: "tf", category: "Ch11 人資",
        question: "員工訓練著重短期技能，員工發展著重長期能力。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 74]。"
    },
    {
        id: 127, type: "tf", category: "Ch11 人資",
        question: "雖然培訓與發展女性與少數族裔管理者在法律與道德面向常被支持，但從經濟角度看「很少有利可圖」。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 75]。多元化能帶來創新與更廣的市場，具備經濟效益。"
    },
    {
        id: 128, type: "tf", category: "Ch11 人資",
        question: "績效評估是依既定標準衡量員工表現，並作為升遷、薪酬、訓練或解僱等決策依據。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 76]。"
    },
    {
        id: 129, type: "tf", category: "Ch11 人資",
        question: "多數資深員工即使未被明確告知，也能清楚知道被期待的表現。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 77]。明確的溝通期望對所有員工都是必要的。"
    },
    {
        id: 130, type: "tf", category: "Ch11 人資",
        question: "績效評估僅對新人與基層主管有用、對高階管理幾乎無價值。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 78]。高階主管也需要評估（如 360 度評估）。"
    },
    {
        id: 131, type: "tf", category: "Ch11 人資",
        question: "許多公司現正外包員工福利計畫的管理。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 79]。"
    },
    {
        id: 132, type: "tf", category: "Ch11 人資",
        question: "員工有時偏好會員資格、公務車等附帶福利，因為這些福利多半不需課稅（相較薪資）。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 80]。"
    },

    // --- True / False (Ch13) ---
    {
        id: 133, type: "tf", category: "Ch13 行銷",
        question: "行銷理念包含三個部分：消費者導向、服務導向、廣告導向。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 82-89]。應為：消費者導向、服務導向、利潤導向(Profit orientation)。"
    },
    {
        id: 134, type: "tf", category: "Ch13 行銷",
        question: "Ogden 汽車會主動提供估價、保固與售後致電確認。這些做法顯示其正在運用顧客關係管理(CRM)。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 91-93]。"
    },
    {
        id: 135, type: "tf", category: "Ch13 行銷",
        question: "行銷組合中所涉及的主要因素有時被稱為行銷的五個無形要素。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 94]。應稱為 4P (Product, Price, Place, Promotion)。"
    },
    {
        id: 136, type: "tf", category: "Ch13 行銷",
        question: "行銷過程包含關於如何以最佳方式將產品交付給消費者的決策。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 95]。這屬於通路 (Place) 的決策。"
    },
    {
        id: 137, type: "tf", category: "Ch13 行銷",
        question: "行銷過程的最後一步通常包括與顧客建立持續的關係。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 96]。"
    },
    {
        id: 138, type: "tf", category: "Ch13 行銷",
        question: "行銷研究過程的第一步是收集相關資料。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 97]。第一步通常是「定義問題或機會」。"
    },
    {
        id: 139, type: "tf", category: "Ch13 行銷",
        question: "Tech Universe Consulting 進行的線上調查與訪談都是其主要資料(Primary data)來源。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 100]。為了特定目的新收集的資料為初級資料。"
    },
    {
        id: 140, type: "tf", category: "Ch13 行銷",
        question: "購買者的購買理由是判定商品屬於消費性產品或企業對企業（B2B）產品的關鍵因素。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 101]。"
    },
    {
        id: 141, type: "tf", category: "Ch13 行銷",
        question: "市場區隔讓公司能將具有相似特徵的消費者歸為同一群體。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 102]。"
    },
    {
        id: 142, type: "tf", category: "Ch13 行銷",
        question: "Kiara 花時間維繫現有客戶並確保他們滿意，這種做法符合大眾行銷(Mass marketing)的理念。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 105]。這符合「關係行銷」理念；大眾行銷則是一視同仁地銷售。"
    },

    // --- True / False (Ch14) ---
    {
        id: 143, type: "tf", category: "Ch14 產品",
        question: "從策略行銷的觀點來看，「整體產品提供」包含了消費者在決定是否購買時會評估的所有要素。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 107]。包含價格、包裝、品牌、服務等。"
    },
    {
        id: 144, type: "tf", category: "Ch14 產品",
        question: "一家企業所銷售的不同產品線，構成該組織的產品組合(Product mix)。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 108]。"
    },
    {
        id: 145, type: "tf", category: "Ch14 產品",
        question: "即使產品之間的實際差異極小，行銷人員仍會透過定價、廣告與包裝來區隔自家產品與競爭者的產品。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 109]。此即產品差異化。"
    },
    {
        id: 146, type: "tf", category: "Ch14 產品",
        question: "非搜尋性商品(Unsought goods)通常是因衝動而購買，且對消費者不提供任何附加價值。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 110]。非搜尋品(如保險、喪葬)有其價值，只是消費者平時不會主動想到。"
    },
    {
        id: 147, type: "tf", category: "Ch14 產品",
        question: "Amir 造訪多家店比較躺椅的品質與價格。這種行為顯示對 Amir 來說，躺椅屬於「選購性商品(Shopping good)」。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 112]。願意花時間比較的商品屬選購品。"
    },
    {
        id: 148, type: "tf", category: "Ch14 產品",
        question: "商標是一種品牌，並對品牌名稱及設計獲得專屬的法律保護。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 113]。"
    },
    {
        id: 149, type: "tf", category: "Ch14 產品",
        question: "品牌名稱能協助賣方推出新產品，並創造提高價格的機會。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 114]。強勢品牌有品牌權益。"
    },
    {
        id: 150, type: "tf", category: "Ch14 產品",
        question: "概念測試是將產品構想帶給行銷經理，藉以測試他們的反應。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 115]。概念測試的對象應是「潛在消費者」。"
    },
    {
        id: 151, type: "tf", category: "Ch14 產品",
        question: "產品生命週期的四個階段是導入、市場、交換與衰退。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 116]。正確為：導入、成長、成熟、衰退。"
    },
    {
        id: 152, type: "tf", category: "Ch14 產品",
        question: "為了計算損益平衡點，經理人必須知道產品的售價、總固定成本，以及每單位的變動成本。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 119]。"
    },

    // --- True / False (Ch16) ---
    {
        id: 153, type: "tf", category: "Ch16 推廣",
        question: "廣播廣告的成本高於電視廣告，但通常能觸及更多人。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 121]。通常電視成本較高且觸及率較廣。"
    },
    {
        id: 154, type: "tf", category: "Ch16 推廣",
        question: "當行銷人員在像 Google 這樣的大型線上搜尋引擎上投放廣告時，他們能觸及最想要接觸的目標族群。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 122]。"
    },
    {
        id: 155, type: "tf", category: "Ch16 推廣",
        question: "企業支付置入性行銷的費用，以便讓其產品成為電視節目或電影情節的一部分。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 123]。"
    },
    {
        id: 156, type: "tf", category: "Ch16 推廣",
        question: "銷售流程的第一步包含尋找潛在顧客，並挑選出最有可能購買的對象。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 124]。"
    },
    {
        id: 157, type: "tf", category: "Ch16 推廣",
        question: "個人銷售(Personal selling)是企業推廣產品時成本最低的方式之一。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 125]。人員銷售通常成本極高（以單次接觸計算）。"
    },
    {
        id: 158, type: "tf", category: "Ch16 推廣",
        question: "有效運用公共關係包括評估公眾態度，並執行計畫以獲取公眾的認同。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 126]。"
    },
    {
        id: 159, type: "tf", category: "Ch16 推廣",
        question: "行銷常被稱為公共關係的「發聲手臂」。",
        answer: false,
        [cite_start]explanation: "錯誤 [cite: 127]。通常說法相反，或指公關是行銷的一部分。公關更側重形象維護。"
    },
    {
        id: 160, type: "tf", category: "Ch16 推廣",
        question: "以促銷手段舉辦的商展主要針對企業對企業B2B客戶。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 128]。"
    },
    {
        id: 161, type: "tf", category: "Ch16 推廣",
        question: "社群媒體提供了進行正面與負面口碑推廣的機會。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 129]。"
    },
    {
        id: 162, type: "tf", category: "Ch16 推廣",
        question: "推式促銷策略(Push strategy)的目標，是透過提供誘因給批發商與零售商，使他們願意進貨並銷售產品。",
        answer: true,
        [cite_start]explanation: "正確 [cite: 130]。"
    },


    // --- Multiple Choice (Ch7) ---
    {
        id: 201, type: "mc", category: "Ch7 管理",
        question: "當代管理更強調以下哪一項？",
        options: ["可以有效衡量的個人工作", "團隊合作", "努力消除管理中的控制職能", "更仰賴政府提供資金"],
        correctIndex: 1,
        [cite_start]explanation: "當代管理重視團隊協作與扁平化組織 [cite: 133] (Working in teams)。"
    },
    {
        id: 202, type: "mc", category: "Ch7 管理",
        question: "以下哪一項特質對現代管理者最有幫助？",
        options: ["嚴格紀律者", "監督者", "組織者(引導者)", "技術專長者"],
        correctIndex: 2,
        [cite_start]explanation: "現代管理者角色轉變為教練或引導者(Coach/Guide/Organizer) [cite: 135]。"
    },
    {
        id: 203, type: "mc", category: "Ch7 管理",
        question: "領導、指導與士氣建立皆屬於管理者的哪一類技能？",
        options: ["技術技能", "理論技能", "實證技能", "人際關係技能"],
        correctIndex: 3,
        [cite_start]explanation: "這些涉及與人互動，屬於人際關係技能(Human relations) [cite: 136]。"
    },
    {
        id: 204, type: "mc", category: "Ch7 管理",
        question: "__________ 涉及為他人建立可追隨的願景，確立企業價值與倫理，並改變組織運作方式。",
        options: ["組織", "生產管理", "策略性規劃", "領導"],
        correctIndex: 3,
        [cite_start]explanation: "建立願景是「領導(Leadership)」的核心功能 [cite: 137]。"
    },
    {
        id: 205, type: "mc", category: "Ch7 管理",
        question: "那些願意傾聽部屬意見並讓他們參與決策的管理者，採用的是哪一種領導風格？",
        options: ["專制式", "放任式", "參與式", "官僚式"],
        correctIndex: 2,
        [cite_start]explanation: "參與式(Participative)強調共同決策與傾聽 [cite: 138]。"
    },
    {
        id: 206, type: "mc", category: "Ch7 管理",
        question: "有效領導的關鍵在於哪一項能力？",
        options: ["維持秩序、穩定與控制", "溝通願景並凝聚他人共同實現該願景", "精通部屬工作的技術細節", "以專制方式處理人際互動"],
        correctIndex: 1,
        [cite_start]explanation: "領導者需激勵人心並溝通願景 [cite: 140]。"
    },
    {
        id: 207, type: "mc", category: "Ch7 管理",
        question: "管理者與領導者之間的一項差異是：",
        options: ["管理者存在於企業，領導者在非營利組織", "管理者追求穩定，而領導者擁抱變革", "管理者採用專制方式，領導者偏好民主", "所有員工都能管理，但只有高層能領導"],
        correctIndex: 1,
        [cite_start]explanation: "管理者維持現狀，領導者推動改變 [cite: 143]。"
    },
    {
        id: 208, type: "mc", category: "Ch7 管理",
        question: "關於有效領導，下列哪個說法最正確？",
        options: ["有效領導者都具有相同的性格特質", "最有效的領導風格取決於被領導者及所處情境", "民主式領導幾乎總能提升組織效率", "有效的管理者會始終維持同一種領導風格"],
        correctIndex: 1,
        [cite_start]explanation: "沒有最好的風格，只有最適合情境的風格(情境領導) [cite: 146]。"
    },
    {
        id: 209, type: "mc", category: "Ch7 管理",
        question: "在何種情況下，專制式領導可能最為有效？",
        options: ["當部屬是受過高度訓練的專業人員", "當組織面臨緊急狀況時", "當員工喜歡表達意見", "當管理者不確定最佳策略時"],
        correctIndex: 1,
        [cite_start]explanation: "緊急狀況需快速決策，專制領導較有效率 [cite: 148]。"
    },
    {
        id: 210, type: "mc", category: "Ch7 管理",
        question: "關於領導風格，下列哪項說法最正確？",
        options: ["管理者應選擇一種風格並始終如一地使用", "管理者無法控制自己採用的領導風格", "有效的管理者通常會依情況運用多種領導風格", "管理者應先採用專制式，再改為民主式"],
        correctIndex: 2,
        [cite_start]explanation: "應靈活運用不同風格 [cite: 151]。"
    },

    // --- Multiple Choice (Ch10) ---
    {
        id: 211, type: "mc", category: "Ch10 動機",
        question: "人們在把工作做好時所感受到的個人滿足是一種__________獎酬。",
        options: ["認知性的", "外在的", "生理性的", "內在的"],
        correctIndex: 3,
        [cite_start]explanation: "源自內心的成就感屬於內在獎酬(Intrinsic) [cite: 154]。"
    },
    {
        id: 212, type: "mc", category: "Ch10 動機",
        question: "由他人因良好表現而給予的獎酬是__________獎酬。",
        options: ["條件性的", "內在的", "外在的", "次要的"],
        correctIndex: 2,
        [cite_start]explanation: "來自外部(如獎金、讚賞)屬於外在獎酬(Extrinsic) [cite: 155]。"
    },
    {
        id: 213, type: "mc", category: "Ch10 動機",
        question: "在馬斯洛的需求層次中，__________需求指的是人類想達到自身最大潛能的渴望。",
        options: ["社會需求", "尊重需求", "自我導向需求", "自我實現需求"],
        correctIndex: 3,
        [cite_start]explanation: "最高層次為自我實現(Self-actualization) [cite: 156]。"
    },
    {
        id: 214, type: "mc", category: "Ch10 動機",
        question: "公平理論指出，員工在什麼情況下會有良好表現？",
        options: ["了解自身職責", "有機會給他人印象", "相信自己獲得的報酬相較於他人是公平的", "知道主管已設定目標"],
        correctIndex: 2,
        [cite_start]explanation: "公平理論核心在於比較投入與產出的公平性 [cite: 157]。"
    },
    {
        id: 215, type: "mc", category: "Ch10 動機",
        question: "依據公平理論，下列哪項陳述最為正確？",
        options: ["最佳方法是給每個人相同的獎酬", "員工對公平與否的感受會影響其動機程度", "員工通常能準確評估自己貢獻", "員工只關心自身情況"],
        correctIndex: 1,
        [cite_start]explanation: "感知到的公平性直接影響動機 [cite: 159]。"
    },
    {
        id: 216, type: "mc", category: "Ch10 動機",
        question: "與員工獲得有關自身表現的直接且明確資訊量有關的工作特性稱為：",
        options: ["聯結性", "回饋", "自主性", "擴增性"],
        correctIndex: 1,
        [cite_start]explanation: "得知表現如何屬於回饋(Feedback) [cite: 161]。"
    },
    {
        id: 217, type: "mc", category: "Ch10 動機",
        question: "組織可以透過以下方式建立開放式溝通：",
        options: ["建立清晰的指揮鏈", "確保主管有私人辦公室", "教導員工傾聽管理層", "營造一種獎勵傾聽的組織文化"],
        correctIndex: 3,
        [cite_start]explanation: "開放溝通需要雙向傾聽的文化 [cite: 162]。"
    },
    {
        id: 218, type: "mc", category: "Ch10 動機",
        question: "高語境文化(High-context culture)的特徵是什麼？",
        options: ["一開始工作就直接投入任務", "適應後直接投入任務", "建立人際關係是浪費時間", "建立關係與培養信任非常重要且在任務前進行"],
        correctIndex: 3,
        [cite_start]explanation: "高語境文化重視人際關係與信任 [cite: 164]。"
    },
    {
        id: 219, type: "mc", category: "Ch10 動機",
        question: "低語境文化(Low-context culture)的特徵是什麼？",
        options: ["員工開始工作後立即投入任務，無需社交", "滿足社交後才工作", "建立關係浪費時間", "建立關係非常重要"],
        correctIndex: 0,
        [cite_start]explanation: "低語境文化重視效率與直接溝通 [cite: 166]。"
    },
    {
        id: 220, type: "mc", category: "Ch10 動機",
        question: "即使跨越不同世代，員工的動機仍可能：",
        options: ["是個謎", "來自工作本身", "隨時間形成", "在高成就者身上減弱"],
        correctIndex: 1,
        [cite_start]explanation: "許多研究顯示，工作本身的意義與挑戰性是跨世代的激勵源 [cite: 168]。"
    },

    // --- Multiple Choice (Ch11) ---
    {
        id: 221, type: "mc", category: "Ch11 人資",
        question: "下列何者指出職務說明(Job description)與職務規格(Job specifications)的關鍵差異？",
        options: ["職務說明是短期目標，規格是長期", "職務說明基於清冊，規格基於評估", "職務說明是關於「工作本身」，職務規格是關於「人」的條件", "職務說明是摘要，規格是詳細說明"],
        correctIndex: 2,
        explanation: "Description = Job tasks; [cite_start]Specifications = Human requirements [cite: 171]。"
    },
    {
        id: 222, type: "mc", category: "Ch11 人資",
        question: "下列何者屬於外部招募來源的例子？",
        options: ["線上求職網站", "現有員工升遷", "內部轉調", "員工推薦"],
        correctIndex: 0,
        [cite_start]explanation: "求職網站是向組織外部尋找人才 [cite: 173]。"
    },
    {
        id: 223, type: "mc", category: "Ch11 人資",
        question: "對潛在員工的工作紀錄、學術紀錄、信用紀錄與推薦人進行查核稱為__________。",
        options: ["人格特質剖析", "背景調查", "忠誠度評估", "品格審查"],
        correctIndex: 1,
        [cite_start]explanation: "這是背景調查(Background investigation)的定義 [cite: 174]。"
    },
    {
        id: 224, type: "mc", category: "Ch11 人資",
        question: "關於在甄選流程中使用社群媒體審視，下列何者正確？",
        options: ["多數公司在評估應徵者時，會將其線上足跡納入考量", "極少雇主使用", "法律完全禁止", "公司要求無數位足跡"],
        correctIndex: 0,
        [cite_start]explanation: "現代雇主常會查看候選人的社群媒體 [cite: 175]。"
    },
    {
        id: 225, type: "mc", category: "Ch11 人資",
        question: "建立訓練與發展計畫的第一步是：",
        options: ["設定模擬參數", "評估組織的需求與員工的技能", "進行僱用前測驗", "開始設計課程"],
        correctIndex: 1,
        [cite_start]explanation: "訓練需求評估(Needs assessment)是首要步驟 [cite: 177]。"
    },
    {
        id: 226, type: "mc", category: "Ch11 人資",
        question: "讓經理人在不同部門輪調以接觸組織內多種職能的管理訓練計畫稱為：",
        options: ["工作擴大化", "模擬訓練", "職務輪調", "學徒制計畫"],
        correctIndex: 2,
        [cite_start]explanation: "職務輪調(Job rotation)有助於培養全方位觀點 [cite: 179]。"
    },
    {
        id: 227, type: "mc", category: "Ch11 人資",
        question: "隨著科技更為成熟，想讓所有員工接受一致訓練的雇主可能會選擇：",
        options: ["學徒制計畫", "導師制計畫", "職務輪調計畫", "線上訓練課程"],
        correctIndex: 3,
        [cite_start]explanation: "線上訓練能確保內容標準化且易於傳遞 [cite: 181]。"
    },
    {
        id: 228, type: "mc", category: "Ch11 人資",
        question: "培養女性與有色人種擔任管理職是一項良好策略，因為：",
        options: ["法律規定會增加", "更能吸引多元的顧客族群", "訓練成本較低", "較不可能換工作"],
        correctIndex: 1,
        [cite_start]explanation: "管理層多元化有助於反映並吸引多元市場 [cite: 183]。"
    },
    {
        id: 229, type: "mc", category: "Ch11 人資",
        question: "__________是以既定標準評估員工績效水準，以據以決定升遷、薪酬、追加訓練或解僱的制度。",
        options: ["職務分析", "績效評估", "背景查核", "SWOT 分析"],
        correctIndex: 1,
        [cite_start]explanation: "Performance appraisal 是評估與決策的依據 [cite: 185]。"
    },
    {
        id: 230, type: "mc", category: "Ch11 人資",
        question: "許多公司現在為員工提供如現場理髮與禮賓服務等__________福利，協助員工平衡工作與生活。",
        options: ["即時型", "情境型", "休息型", "柔性（軟性）"],
        correctIndex: 3,
        [cite_start]explanation: "這類非金錢、便利生活的福利常被稱為軟性福利(Soft benefits) [cite: 186]。"
    },

    // --- Multiple Choice (Ch13) ---
    {
        id: 231, type: "mc", category: "Ch13 行銷",
        question: "二戰後消費者需求的大幅增加，標誌著__________的開始。",
        options: ["生產時代", "推銷時代", "行銷觀念時代", "顧客關係時代"],
        correctIndex: 2,
        [cite_start]explanation: "二戰後轉變為以滿足消費者需求為主的行銷觀念時代 [cite: 188]。"
    },
    {
        id: 232, type: "mc", category: "Ch13 行銷",
        question: "採行__________的企業不僅僅是賣出產品；其目標是盡可能了解顧客，並在長期內滿足他們。",
        options: ["非營利行銷", "顧客關係管理(CRM)", "目標管理", "行銷組合"],
        correctIndex: 1,
        [cite_start]explanation: "CRM 強調長期關係與深入了解 [cite: 190]。"
    },
    {
        id: 233, type: "mc", category: "Ch13 行銷",
        question: "雖然四個 P 有助於我們記住__________的基本構成，但它們並未呈現整個行銷流程中的所有要素。",
        options: ["溝通策略", "行銷組合", "產品開發流程", "顧客關係行銷流程"],
        correctIndex: 1,
        [cite_start]explanation: "4P 即行銷組合 (Marketing Mix) [cite: 192]。"
    },
    {
        id: 234, type: "mc", category: "Ch13 行銷",
        question: "行銷流程的最後一步通常包括：",
        options: ["將產品差異化", "設定價格", "決定配銷", "建立與顧客的關係"],
        correctIndex: 3,
        [cite_start]explanation: "現代行銷強調售後持續建立關係 [cite: 193]。"
    },
    {
        id: 235, type: "mc", category: "Ch13 行銷",
        question: "成功的行銷研究人員會：",
        options: ["只看過去需求", "盡可能蒐集第一手資訊", "聆聽現有顧客與其他利害關係人的意見", "依賴自身經驗"],
        correctIndex: 2,
        [cite_start]explanation: "傾聽顧客聲音是研究的核心 [cite: 195]。"
    },
    {
        id: 236, type: "mc", category: "Ch13 行銷",
        question: "__________是用來辨識影響行銷成功的各種因素之過程。",
        options: ["環境掃描", "目標行銷", "利基行銷", "區隔分析"],
        correctIndex: 0,
        [cite_start]explanation: "Environmental scanning 是分析外部環境因素 [cite: 197]。"
    },
    {
        id: 237, type: "mc", category: "Ch13 行銷",
        question: "哪個術語指的是想為個人消費而購買商品與服務，且具備購買資源的個體？",
        options: ["次級市場", "企業對企業市場", "第三級市場", "消費者市場"],
        correctIndex: 3,
        [cite_start]explanation: "Consumer market 針對個人或家庭消費 [cite: 198]。"
    },
    {
        id: 238, type: "mc", category: "Ch13 行銷",
        question: "決定產品被歸類為消費性產品或工業產品的因素是：",
        options: ["產品的最終用途", "購買時的決策流程", "購買者身分", "新舊程度"],
        correctIndex: 0,
        [cite_start]explanation: "End use (自用 vs 製造/轉售) 是分類依據 [cite: 199]。"
    },
    {
        id: 239, type: "mc", category: "Ch13 行銷",
        question: "採用__________區隔的公司，會根據價值觀、態度或興趣將市場分成各群組。",
        options: ["人口統計", "利益", "心理變數", "規範"],
        correctIndex: 2,
        [cite_start]explanation: "價值觀與興趣屬於心理變數(Psychographic) [cite: 201]。"
    },
    {
        id: 240, type: "mc", category: "Ch13 行銷",
        question: "採用__________區隔的公司，會依據年齡或學歷將市場分群。",
        options: ["利益", "心理變數", "經濟", "人口統計"],
        correctIndex: 3,
        [cite_start]explanation: "年齡、性別、學歷屬於人口統計變數(Demographic) [cite: 202]。"
    },

    // --- Multiple Choice (Ch14) ---
    {
        id: 241, type: "mc", category: "Ch14 產品",
        question: "哪個術語指的是企業所提供、在物理屬性相似或目標市場相近的一組產品？",
        options: ["產品矩陣", "產品線", "產品組合", "總體產品提供"],
        correctIndex: 1,
        [cite_start]explanation: "相似的一組產品稱為產品線(Product line) [cite: 204]。"
    },
    {
        id: 242, type: "mc", category: "Ch14 產品",
        question: "__________的目的在於創造產品在真實或感知上的差異。",
        options: ["利基行銷", "產品差異化", "產品混合", "目標行銷"],
        correctIndex: 1,
        [cite_start]explanation: "Product differentiation 意在創造獨特性 [cite: 205]。"
    },
    {
        id: 243, type: "mc", category: "Ch14 產品",
        question: "下列何者為產品差異化的一項特徵？",
        options: ["完全由價格決定", "可建立在產品的真實差異或消費者感知差異上", "限制價格競爭", "僅由包裝決定"],
        correctIndex: 1,
        [cite_start]explanation: "差異化可以是實體的，也可以是心理感知的(如品牌形象) [cite: 206]。"
    },
    {
        id: 244, type: "mc", category: "Ch14 產品",
        question: "Mindent 是一個新口香糖品牌。消費者想以最少努力購買這類產品。Mindent 屬於：",
        options: ["選購品", "專用品", "便利品", "工業品"],
        correctIndex: 2,
        [cite_start]explanation: "隨手可得、不願花精力尋找的是便利品(Convenience good) [cite: 208]。"
    },
    {
        id: 245, type: "mc", category: "Ch14 產品",
        question: "關於包裝在行銷中的角色，下列何者正確？",
        options: ["最不重要", "包裝能改變並提升一項基本產品", "不影響決策", "最昂貴"],
        correctIndex: 1,
        [cite_start]explanation: "包裝能增加價值、吸引注意並保護產品 [cite: 211]。"
    },
    {
        id: 246, type: "mc", category: "Ch14 產品",
        question: "從買方觀點來看，知名品牌產品的一項好處是：",
        options: ["品質保證", "有助促銷", "提高重複購買", "區隔產品"],
        correctIndex: 0,
        [cite_start]explanation: "品牌對消費者而言代表著品質承諾與降低風險 [cite: 213]。"
    },
    {
        id: 247, type: "mc", category: "Ch14 產品",
        question: "許多超市販售僅標示內容物名稱(如 Oatmeal)的簡樸包裝商品。這些商品屬於：",
        options: ["自有品牌", "製造商品牌", "無品牌（通用）商品", "通用碼品牌"],
        correctIndex: 2,
        [cite_start]explanation: "僅標示內容物的稱為 Generic goods [cite: 216]。"
    },
    {
        id: 248, type: "mc", category: "Ch14 產品",
        question: "__________會將新產品概念呈現給潛在顧客以測試其反應。",
        options: ["產品分析", "概念測試", "產品篩選", "原型開發"],
        correctIndex: 1,
        [cite_start]explanation: "Concept testing 是在開發早期測試市場反應 [cite: 218]。"
    },
    {
        id: 249, type: "mc", category: "Ch14 產品",
        question: "產品生命週期的哪個階段具有銷售快速成長、獲利很高且競爭者增加的特徵？",
        options: ["成長期", "成熟期", "飽和期", "衰退期"],
        correctIndex: 0,
        [cite_start]explanation: "成長期(Growth)特徵為銷量飆升、競爭者進入 [cite: 219]。"
    },
    {
        id: 250, type: "mc", category: "Ch14 產品",
        question: "一種以競爭為基礎，由一家主導廠商設定價格，其他競爭者遵循的定價策略稱為：",
        options: ["撇脂定價", "滲透定價", "目標成本法", "價格領導"],
        correctIndex: 3,
        [cite_start]explanation: "這稱為價格領導(Price leadership) [cite: 220]。"
    }
];

// ==========================================
// 3. 核心邏輯 (App Logic)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderTerms();
    renderQuiz('all');
});

function switchTab(tabName) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    document.getElementById('terms-section').style.display = tabName === 'terms' ? 'block' : 'none';
    document.getElementById('quiz-section').style.display = tabName === 'quiz' ? 'block' : 'none';
    
    // 滾動到頂部
    window.scrollTo(0, 0);
}

function renderTerms() {
    const container = document.getElementById('terms-container');
    container.innerHTML = '';

    keyTermsData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'term-card';
        card.innerHTML = `
            <div class="term-header">
                <span class="term-title">${item.term}</span>
            </div>
            <div class="input-area">
                <textarea placeholder="試著輸入定義 (自我練習)..."></textarea>
                <button class="reveal-btn" onclick="toggleTermAnswer(${item.id})">
                    <i class="fas fa-eye"></i> 顯示提示與詳解
                </button>
            </div>
            <div id="term-ans-${item.id}" class="term-answer">
                <div class="tag">中文翻譯</div>
                <p><strong>${item.translation}</strong></p>
                <div class="tag" style="margin-top:10px;">解釋</div>
                <p>${item.desc}</p>
                <div class="tag" style="margin-top:10px; background:#fce7f3; color:#be185d;">舉例</div>
                <p>${item.example}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function toggleTermAnswer(id) {
    const ansDiv = document.getElementById(`term-ans-${id}`);
    // 獲取點擊的按鈕元素 (event.target 可能點到 icon，所以往上找 button)
    const btn = document.querySelector(`button[onclick="toggleTermAnswer(${id})"]`);
    
    if (ansDiv.style.display === 'block') {
        ansDiv.style.display = 'none';
        btn.innerHTML = '<i class="fas fa-eye"></i> 顯示提示與詳解';
    } else {
        ansDiv.classList.add('show');
        ansDiv.style.display = 'block';
        btn.innerHTML = '<i class="fas fa-eye-slash"></i> 隱藏詳解';
    }
}

function filterQuiz(type) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderQuiz(type);
}

function renderQuiz(filterType) {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    const filteredData = filterType === 'all' 
        ? quizData 
        : quizData.filter(q => q.type === filterType);

    if (filteredData.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding:20px;">沒有符合條件的題目。</p>';
        return;
    }

    filteredData.forEach(q => {
        const card = document.createElement('div');
        card.className = 'quiz-card';
        
        let optionsHtml = '';
        
        if (q.type === 'tf') {
            optionsHtml = `
                <button class="option-btn" onclick="checkAnswer(this, true, ${q.answer}, '${q.explanation.replace(/'/g, "\\'")}')">True (正確)</button>
                <button class="option-btn" onclick="checkAnswer(this, false, ${q.answer}, '${q.explanation.replace(/'/g, "\\'")}')">False (錯誤)</button>
            `;
        } else if (q.type === 'mc') {
            q.options.forEach((opt, idx) => {
                optionsHtml += `
                    <button class="option-btn" onclick="checkAnswer(this, ${idx}, ${q.correctIndex}, '${q.explanation.replace(/'/g, "\\'")}')">
                        ${String.fromCharCode(65+idx)}. ${opt}
                    </button>
                `;
            });
        }

        card.innerHTML = `
            <div class="tag">${q.category}</div>
            <div class="question-text">${q.question}</div>
            <div class="options-list">
                ${optionsHtml}
            </div>
            <div class="feedback-box"></div>
        `;
        container.appendChild(card);
    });
}

function checkAnswer(btnElement, userChoice, correctChoice, explanation) {
    const card = btnElement.closest('.quiz-card');
    const feedbackBox = card.querySelector('.feedback-box');
    const allBtns = card.querySelectorAll('.option-btn');

    // 鎖定該題，避免重複點擊
    if (card.classList.contains('answered')) return;
    card.classList.add('answered');

    const isCorrect = userChoice === correctChoice;

    if (isCorrect) {
        btnElement.classList.add('correct');
        feedbackBox.innerHTML = `<i class="fas fa-check-circle"></i> <strong>答對了！</strong><br>${explanation}`;
        feedbackBox.style.backgroundColor = '#d1fae5';
        feedbackBox.style.color = '#065f46';
        feedbackBox.style.borderColor = '#34d399';
    } else {
        btnElement.classList.add('wrong');
        // 標示正確答案
        allBtns.forEach((btn, idx) => {
            if (typeof correctChoice === 'boolean') {
                if ((correctChoice && btn.innerText.includes('True')) || (!correctChoice && btn.innerText.includes('False'))) {
                    btn.classList.add('correct');
                }
            } else {
                if (idx === correctChoice) {
                    btn.classList.add('correct');
                }
            }
        });
        feedbackBox.innerHTML = `<i class="fas fa-times-circle"></i> <strong>答錯了。</strong><br>${explanation}`;
        feedbackBox.style.backgroundColor = '#fee2e2';
        feedbackBox.style.color = '#991b1b';
        feedbackBox.style.borderColor = '#f87171';
    }

    feedbackBox.style.display = 'block';
}
