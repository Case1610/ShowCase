// プロフィールデータの型定義
interface ProfileName {
  ja: { first: string; last: string };
  en: { first: string; last: string };
}

interface ProfileBasicInfo {
  name: ProfileName;
  gender?: string;
  birthday: string;
  birthdayDisplay?: string;
  nationality?: string;
}

interface ProfileBiography {
  'short-values': string;
  short: string;
  long: string;
}

interface ProfileSocialLink {
  platform: string;
  url: string;
}

interface ProfileCareerEducation {
  organization: string;
  organizationDisplay?: string;
  department: string;
  departmentDisplay?: string;
  start_date: string;
  end_date: string | null;
  description: string;
}

interface ProfileCertificationDescription {
  title: string;
  description: string;
  url?: string | null;
}

interface ProfileCertification {
  name: string;
  date: string;
  isPersonalAchievement?: boolean;
  description?: ProfileCertificationDescription | null;
}

interface ProfileSkill {
  name: string;
}

interface ProfileStrengthsFinder {
  top_5: string[];
  all_ranking: string[];
}

export interface ProfileData {
  basicInfo: ProfileBasicInfo;
  biography: ProfileBiography;
  interests: string[];
  strengths_finder: ProfileStrengthsFinder;
  social_links: ProfileSocialLink[];
  values: string[];
  goals: string[];
  career: ProfileCareerEducation[];
  education: ProfileCareerEducation[];
  certifications: ProfileCertification[];
  skills: ProfileSkill[];
}

// プロフィール情報の表示制御設定
export const PROFILE_DISPLAY_CONFIG = {
  // 基本情報の表示制御
  basicInfo: {
    showFullBirthday: false,        // 完全な誕生日を表示するか（falseなら年のみ）
    showGender: false,              // 性別を表示するか
    showNationality: false,         // 国籍を表示するか
  },
  
  // 経歴の表示制御
  career: {
    showSpecificOrganization: false, // 具体的な組織名を表示するか
    showSpecificDepartment: false,   // 具体的な部署名を表示するか
    showFullDates: true,            // 完全な日付を表示するか
  },
  
  // 学歴の表示制御
  education: {
    showSpecificSchool: false,      // 具体的な学校名を表示するか
    showResearchLab: false,         // 研究室名を表示するか
  },
  
  // ソーシャルリンクの表示制御
  socialLinks: {
    showTwitter: true,              // Twitterリンクを表示するか
    showWantedly: false,            // Wantedlyリンクを表示するか
  },
  
  // 資格の表示制御
  certifications: {
    showPersonalAchievements: false, // 個人を特定しやすい実績を表示するか
    showUrls: false,                // 資格のURLを表示するか
  }
};

// プロフィールデータを表示用に変換する関数
export const transformProfileForDisplay = (profileData: ProfileData): ProfileData => {
  const transformed = JSON.parse(JSON.stringify(profileData)); // ディープコピー
  
  // 基本情報の変換
  if (!PROFILE_DISPLAY_CONFIG.basicInfo.showFullBirthday && transformed.basicInfo.birthdayDisplay) {
    transformed.basicInfo.birthday = transformed.basicInfo.birthdayDisplay;
  }
  
  if (!PROFILE_DISPLAY_CONFIG.basicInfo.showGender) {
    delete transformed.basicInfo.gender;
  }
  
  if (!PROFILE_DISPLAY_CONFIG.basicInfo.showNationality) {
    delete transformed.basicInfo.nationality;
  }
  
  // 経歴の変換
  if (!PROFILE_DISPLAY_CONFIG.career.showSpecificOrganization) {
    transformed.career = transformed.career.map((job: ProfileCareerEducation) => ({
      ...job,
      organization: job.organizationDisplay || job.organization
    }));
  }
  
  if (!PROFILE_DISPLAY_CONFIG.career.showSpecificDepartment) {
    transformed.career = transformed.career.map((job: ProfileCareerEducation) => ({
      ...job,
      department: job.departmentDisplay || job.department
    }));
  }
  
  // 学歴の変換
  if (!PROFILE_DISPLAY_CONFIG.education.showSpecificSchool) {
    transformed.education = transformed.education.map((edu: ProfileCareerEducation) => ({
      ...edu,
      organization: edu.organizationDisplay || edu.organization
    }));
  }
  
  if (!PROFILE_DISPLAY_CONFIG.education.showResearchLab) {
    transformed.education = transformed.education.map((edu: ProfileCareerEducation) => ({
      ...edu,
      department: edu.departmentDisplay || edu.department
    }));
  }
  
  // ソーシャルリンクのフィルタリング
  transformed.social_links = transformed.social_links.filter((link: ProfileSocialLink) => {
    if (link.platform === 'Twitter' && !PROFILE_DISPLAY_CONFIG.socialLinks.showTwitter) {
      return false;
    }
    if (link.platform === 'Wantedly' && !PROFILE_DISPLAY_CONFIG.socialLinks.showWantedly) {
      return false;
    }
    return true;
  });
  
  // 資格の変換
  if (!PROFILE_DISPLAY_CONFIG.certifications.showPersonalAchievements) {
    transformed.certifications = transformed.certifications.filter((cert: ProfileCertification) => 
      !cert.isPersonalAchievement
    );
  }
  
  if (!PROFILE_DISPLAY_CONFIG.certifications.showUrls) {
    transformed.certifications = transformed.certifications.map((cert: ProfileCertification) => ({
      ...cert,
      description: cert.description ? {
        ...cert.description,
        url: null
      } : cert.description
    }));
  }
  
  return transformed;
};
