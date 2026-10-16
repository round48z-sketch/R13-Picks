import type { Locale } from "@/content/i18n/config";

export type UiMessages = {
  mainNavAria: string;
  mobileNavAria: string;
  footerNavAria: string;
  categoryNavAria: string;
  openMenu: string;
  closeMenu: string;
  about: string;
  aboutShort: string;
  contact: string;
  contactShort: string;
  affiliate: string;
  privacy: string;
  readMore: string;
  viewProduct: string;
  relatedLabel: string;
  relatedTitle: string;
  newPicksLabel: string;
  newPicksTitle: string;
  popularGuidesLabel: string;
  popularGuidesTitle: string;
  popularGuidesLead: string;
  popularGuidesKind: string;
  popularGuidesCta: string;
  popularGuidesMore: string;
  popularGuidesTabsAria: string;
  subCategoryTabsAria: string;
  subCategoryAll: string;
  categorySearchPlaceholder: string;
  categorySearchAria: string;
  categorySearchClearAria: string;
  categorySearchEmpty: string;
  globalSearchPlaceholder: string;
  globalSearchAria: string;
  globalSearchClearAria: string;
  globalSearchEmpty: string;
  heroCarouselAria: string;
  heroCarouselTitle: string;
  heroCarouselPrev: string;
  heroCarouselNext: string;
  heroCarouselDotsAria: string;
  heroCarouselDotSuffix: string;
  heroCarouselPause: string;
  heroCarouselPlay: string;
  heroCarouselReducedMotion: string;
  prNote: string;
  featuresFallback: string;
  designTitle: string;
  pairingTitle: string;
  recommendedFallback: string;
  scenesTitle: string;
  summaryTitle: string;
  emptyCategory: string;
  language: string;
  languageMenuAria: string;
  notFoundTitle: string;
  notFoundBody: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  formCompany: string;
  formSubmit: string;
  formSubmitting: string;
  formSuccess: string;
  formErrorGeneric: string;
  formErrorRetry: string;
  formErrorNotReady: string;
  formSubject: string;
};

export const uiMessages: Record<Locale, UiMessages> = {
  ja: {
    mainNavAria: "メインメニュー",
    mobileNavAria: "モバイルメニュー",
    footerNavAria: "フッター",
    categoryNavAria: "カテゴリ",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    about: "R13 Picksについて",
    aboutShort: "About",
    contact: "お問い合わせ",
    contactShort: "Contact",
    affiliate: "広告・アフィリエイトについて",
    privacy: "プライバシーポリシー",
    readMore: "詳しく見る",
    viewProduct: "商品を見る",
    relatedLabel: "Related",
    relatedTitle: "関連記事",
    newPicksLabel: "New Picks",
    newPicksTitle: "新着記事",
    popularGuidesLabel: "Popular Guides",
    popularGuidesTitle: "比較・まとめ",
    popularGuidesLead:
      "用途・価格・特徴を比べながら、自分に合う候補を見つけるための比較ガイドです。",
    popularGuidesKind: "Guide",
    popularGuidesCta: "比較記事を見る →",
    popularGuidesMore: "もっと見る →",
    popularGuidesTabsAria: "Popular Guidesのカテゴリ切り替え",
    subCategoryTabsAria: "サブカテゴリで絞り込む",
    subCategoryAll: "すべて",
    categorySearchPlaceholder: "商品名・ブランド・キーワードで検索",
    categorySearchAria: "記事を検索",
    categorySearchClearAria: "検索をクリア",
    categorySearchEmpty: "該当する記事が見つかりませんでした。",
    globalSearchPlaceholder: "商品名・ブランド・カテゴリ・キーワードで検索",
    globalSearchAria: "サイト内の記事を検索",
    globalSearchClearAria: "検索をクリア",
    globalSearchEmpty: "該当する記事が見つかりませんでした。",
    heroCarouselAria: "注目の記事",
    heroCarouselTitle: "注目の記事",
    heroCarouselPrev: "前の記事",
    heroCarouselNext: "次の記事",
    heroCarouselDotsAria: "スライドの位置",
    heroCarouselDotSuffix: "枚目を表示",
    heroCarouselPause: "自動再生を停止",
    heroCarouselPlay: "自動再生を開始",
    heroCarouselReducedMotion: "動きを減らす設定中",
    prNote: "PR｜この記事にはアフィリエイト広告を含みます",
    featuresFallback: "商品の特徴",
    designTitle: "デザインについて",
    pairingTitle: "デスク環境との合わせ方",
    recommendedFallback: "こんな人におすすめ",
    scenesTitle: "使用シーン",
    summaryTitle: "まとめ",
    emptyCategory: "このカテゴリの記事は準備中です。もうしばらくお待ちください。",
    language: "Language",
    languageMenuAria: "言語を選択",
    notFoundTitle: "ページが見つかりません",
    notFoundBody: "お探しのページは移動したか、削除された可能性があります。",
    formName: "お名前",
    formEmail: "メールアドレス",
    formMessage: "メッセージ",
    formCompany: "会社名",
    formSubmit: "送信する",
    formSubmitting: "送信中…",
    formSuccess: "お問い合わせを送信しました。",
    formErrorGeneric: "送信に失敗しました。時間をおいてもう一度お試しください。",
    formErrorRetry: "送信に失敗しました。通信状況を確認してもう一度お試しください。",
    formErrorNotReady: "送信の準備がまだ完了していません。しばらくしてからお試しください。",
    formSubject: "R13 Picks お問い合わせ",
  },
  en: {
    mainNavAria: "Main menu",
    mobileNavAria: "Mobile menu",
    footerNavAria: "Footer",
    categoryNavAria: "Categories",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    about: "About R13 Picks",
    aboutShort: "About",
    contact: "Contact",
    contactShort: "Contact",
    affiliate: "Advertising & Affiliates",
    privacy: "Privacy Policy",
    readMore: "Read more",
    viewProduct: "View product",
    relatedLabel: "Related",
    relatedTitle: "Related articles",
    newPicksLabel: "New Picks",
    newPicksTitle: "Latest articles",
    popularGuidesLabel: "Popular Guides",
    popularGuidesTitle: "Comparisons & guides",
    popularGuidesLead:
      "Compare use, price, and features to find options that fit you.",
    popularGuidesKind: "Guide",
    popularGuidesCta: "View guide →",
    popularGuidesMore: "View more →",
    popularGuidesTabsAria: "Popular Guides category tabs",
    subCategoryTabsAria: "Filter by subcategory",
    subCategoryAll: "All",
    categorySearchPlaceholder: "Search products, brands, or keywords",
    categorySearchAria: "Search articles",
    categorySearchClearAria: "Clear search",
    categorySearchEmpty: "No matching articles were found.",
    globalSearchPlaceholder: "Search products, brands, categories, or keywords",
    globalSearchAria: "Search articles on this site",
    globalSearchClearAria: "Clear search",
    globalSearchEmpty: "No matching articles were found.",
    heroCarouselAria: "Featured articles",
    heroCarouselTitle: "Featured articles",
    heroCarouselPrev: "Previous article",
    heroCarouselNext: "Next article",
    heroCarouselDotsAria: "Slide position",
    heroCarouselDotSuffix: " — show this slide",
    heroCarouselPause: "Pause autoplay",
    heroCarouselPlay: "Start autoplay",
    heroCarouselReducedMotion: "Reduced motion is on",
    prNote: "PR｜This article contains affiliate links",
    featuresFallback: "Product highlights",
    designTitle: "Design",
    pairingTitle: "How it fits a desk setup",
    recommendedFallback: "Who it may suit",
    scenesTitle: "Suggested uses",
    summaryTitle: "Summary",
    emptyCategory: "Articles in this category are coming soon. Please check back later.",
    language: "Language",
    languageMenuAria: "Select language",
    notFoundTitle: "Page not found",
    notFoundBody: "The page you are looking for may have been moved or removed.",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formCompany: "Company",
    formSubmit: "Send",
    formSubmitting: "Sending…",
    formSuccess: "Your message has been sent.",
    formErrorGeneric: "Something went wrong. Please try again later.",
    formErrorRetry: "Something went wrong. Check your connection and try again.",
    formErrorNotReady: "The form is not ready yet. Please try again shortly.",
    formSubject: "R13 Picks inquiry",
  },
  ko: {
    mainNavAria: "메인 메뉴",
    mobileNavAria: "모바일 메뉴",
    footerNavAria: "푸터",
    categoryNavAria: "카테고리",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    about: "R13 Picks 소개",
    aboutShort: "About",
    contact: "문의하기",
    contactShort: "Contact",
    affiliate: "광고·제휴 안내",
    privacy: "개인정보 처리방침",
    readMore: "자세히 보기",
    viewProduct: "상품 보기",
    relatedLabel: "Related",
    relatedTitle: "관련 기사",
    newPicksLabel: "New Picks",
    newPicksTitle: "최신 기사",
    popularGuidesLabel: "Popular Guides",
    popularGuidesTitle: "비교·모음",
    popularGuidesLead:
      "용도·가격·특징을 비교하며 나에게 맞는 후보를 찾는 비교 가이드입니다.",
    popularGuidesKind: "Guide",
    popularGuidesCta: "비교 기사 보기 →",
    popularGuidesMore: "더 보기 →",
    popularGuidesTabsAria: "Popular Guides 카테고리 전환",
    subCategoryTabsAria: "서브카테고리로 필터",
    subCategoryAll: "모두",
    categorySearchPlaceholder: "상품명·브랜드·키워드로 검색",
    categorySearchAria: "기사 검색",
    categorySearchClearAria: "검색 지우기",
    categorySearchEmpty: "일치하는 기사를 찾을 수 없습니다.",
    globalSearchPlaceholder: "상품명·브랜드·카테고리·키워드로 검색",
    globalSearchAria: "사이트 내 기사 검색",
    globalSearchClearAria: "검색 지우기",
    globalSearchEmpty: "일치하는 기사를 찾을 수 없습니다.",
    heroCarouselAria: "주목 기사",
    heroCarouselTitle: "주목 기사",
    heroCarouselPrev: "이전 기사",
    heroCarouselNext: "다음 기사",
    heroCarouselDotsAria: "슬라이드 위치",
    heroCarouselDotSuffix: "번째 표시",
    heroCarouselPause: "자동 재생 중지",
    heroCarouselPlay: "자동 재생 시작",
    heroCarouselReducedMotion: "움직임 줄이기 설정 중",
    prNote: "PR｜이 기사에는 제휴 광고가 포함되어 있습니다",
    featuresFallback: "제품 특징",
    designTitle: "디자인",
    pairingTitle: "데스크 환경과의 어울림",
    recommendedFallback: "이런 분께 어울릴 수 있습니다",
    scenesTitle: "사용 장면",
    summaryTitle: "정리",
    emptyCategory: "이 카테고리의 기사는 준비 중입니다. 잠시만 기다려 주세요.",
    language: "Language",
    languageMenuAria: "언어 선택",
    notFoundTitle: "페이지를 찾을 수 없습니다",
    notFoundBody: "요청하신 페이지가 이동되었거나 삭제되었을 수 있습니다.",
    formName: "이름",
    formEmail: "이메일",
    formMessage: "메시지",
    formCompany: "회사명",
    formSubmit: "보내기",
    formSubmitting: "전송 중…",
    formSuccess: "문의가 전송되었습니다.",
    formErrorGeneric: "전송에 실패했습니다. 잠시 후 다시 시도해 주세요.",
    formErrorRetry: "전송에 실패했습니다. 네트워크 상태를 확인한 뒤 다시 시도해 주세요.",
    formErrorNotReady: "아직 전송 준비가 되지 않았습니다. 잠시 후 다시 시도해 주세요.",
    formSubject: "R13 Picks 문의",
  },
  zh: {
    mainNavAria: "主导航",
    mobileNavAria: "移动端菜单",
    footerNavAria: "页脚",
    categoryNavAria: "分类",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    about: "关于 R13 Picks",
    aboutShort: "About",
    contact: "联系我们",
    contactShort: "Contact",
    affiliate: "广告与联盟说明",
    privacy: "隐私政策",
    readMore: "查看详情",
    viewProduct: "查看商品",
    relatedLabel: "Related",
    relatedTitle: "相关文章",
    newPicksLabel: "New Picks",
    newPicksTitle: "最新文章",
    popularGuidesLabel: "Popular Guides",
    popularGuidesTitle: "比较与合集",
    popularGuidesLead:
      "对照用途、价格与特点，找到更适合自己的候选——比较指南。",
    popularGuidesKind: "Guide",
    popularGuidesCta: "查看比较文章 →",
    popularGuidesMore: "查看更多 →",
    popularGuidesTabsAria: "Popular Guides 分类切换",
    subCategoryTabsAria: "按子分类筛选",
    subCategoryAll: "全部",
    categorySearchPlaceholder: "按商品名、品牌或关键词搜索",
    categorySearchAria: "搜索文章",
    categorySearchClearAria: "清除搜索",
    categorySearchEmpty: "未找到匹配的文章。",
    globalSearchPlaceholder: "按商品名、品牌、分类或关键词搜索",
    globalSearchAria: "搜索站内文章",
    globalSearchClearAria: "清除搜索",
    globalSearchEmpty: "未找到匹配的文章。",
    heroCarouselAria: "精选文章",
    heroCarouselTitle: "精选文章",
    heroCarouselPrev: "上一篇",
    heroCarouselNext: "下一篇",
    heroCarouselDotsAria: "幻灯片位置",
    heroCarouselDotSuffix: " — 显示此张",
    heroCarouselPause: "暂停自动播放",
    heroCarouselPlay: "开始自动播放",
    heroCarouselReducedMotion: "已开启减少动态效果",
    prNote: "PR｜本文包含联盟营销链接",
    featuresFallback: "产品要点",
    designTitle: "关于设计",
    pairingTitle: "与桌面环境的搭配",
    recommendedFallback: "适合这类读者",
    scenesTitle: "使用场景",
    summaryTitle: "总结",
    emptyCategory: "该分类的文章正在准备中，请稍后再来查看。",
    language: "Language",
    languageMenuAria: "选择语言",
    notFoundTitle: "页面未找到",
    notFoundBody: "您访问的页面可能已移动或删除。",
    formName: "姓名",
    formEmail: "邮箱",
    formMessage: "留言",
    formCompany: "公司名",
    formSubmit: "发送",
    formSubmitting: "发送中…",
    formSuccess: "您的留言已发送。",
    formErrorGeneric: "发送失败，请稍后再试。",
    formErrorRetry: "发送失败，请检查网络后重试。",
    formErrorNotReady: "表单尚未就绪，请稍后再试。",
    formSubject: "R13 Picks 咨询",
  },
};

export function getUi(locale: Locale): UiMessages {
  return uiMessages[locale];
}
