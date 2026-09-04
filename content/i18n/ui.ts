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
  relatedLabel: string;
  relatedTitle: string;
  newPicksLabel: string;
  newPicksTitle: string;
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
    relatedLabel: "Related",
    relatedTitle: "関連記事",
    newPicksLabel: "New Picks",
    newPicksTitle: "新着記事",
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
    relatedLabel: "Related",
    relatedTitle: "Related articles",
    newPicksLabel: "New Picks",
    newPicksTitle: "Latest articles",
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
    relatedLabel: "Related",
    relatedTitle: "관련 기사",
    newPicksLabel: "New Picks",
    newPicksTitle: "최신 기사",
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
    relatedLabel: "Related",
    relatedTitle: "相关文章",
    newPicksLabel: "New Picks",
    newPicksTitle: "最新文章",
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
