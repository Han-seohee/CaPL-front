<template>
  <!-- 배경: 모바일 #F8F7FC, PC는 보라색 그라데이션 -->
  <div class="min-h-screen bg-[#F8F7FC] md:bg-white md:from-[#667eea] md:to-[#764ba2]">
    <div class="px-0 md:px-4 pt-[3rem] md:pt-[1rem] flex items-center justify-center min-h-screen">
      <!-- 카드: 모바일 전체 너비, PC 70% + 카드 스타일 -->
      <div class="w-full md:w-[70%] md:max-w-[700px] bg-[#F8F7FC]
                  rounded-none md:rounded-[20px]
                  py-[40px] md:py-[100px]
                  px-[20px] md:px-[50px]
                  shadow-none md:shadow-[0px_6px_20px_0px_rgba(0,0,0,0.10)]">
        <h1 class="text-6xl font-bold text-white text-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 115" width="100%" height="115">

            <!-- 그라데이션 정의 -->
            <defs>
              <!-- 은하수 그라데이션 (보라색 강화 버전) -->
              <linearGradient id="galaxyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#667eea">
                  <animate attributeName="stop-color"
                           values="#667eea;#764ba2;#8b5cf6;#764ba2;#667eea"
                           dur="3s"
                           repeatCount="indefinite"/>
                </stop>
                <stop offset="25%" style="stop-color:#764ba2">
                  <animate attributeName="stop-color"
                           values="#764ba2;#8b5cf6;#667eea;#764ba2;#764ba2"
                           dur="3s"
                           repeatCount="indefinite"/>
                </stop>
                <stop offset="50%" style="stop-color:#8b5cf6">
                  <animate attributeName="stop-color"
                           values="#8b5cf6;#667eea;#764ba2;#8b5cf6;#8b5cf6"
                           dur="3s"
                           repeatCount="indefinite"/>
                </stop>
                <stop offset="75%" style="stop-color:#764ba2">
                  <animate attributeName="stop-color"
                           values="#764ba2;#8b5cf6;#667eea;#8b5cf6;#764ba2"
                           dur="3s"
                           repeatCount="indefinite"/>
                </stop>
                <stop offset="100%" style="stop-color:#667eea">
                  <animate attributeName="stop-color"
                           values="#667eea;#764ba2;#8b5cf6;#764ba2;#667eea"
                           dur="3s"
                           repeatCount="indefinite"/>
                </stop>
              </linearGradient>

              <!-- 별 그라데이션 (보라색 버전) -->
              <radialGradient id="starGradientPurple">
                <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1"/>
                <stop offset="100%" style="stop-color:#667eea;stop-opacity:0.3"/>
              </radialGradient>

              <!-- 그림자 필터 (흰 배경용) -->
              <filter id="shadow">
                <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.1"/>
              </filter>

              <!-- 글로우 필터 (약하게) -->
              <filter id="softGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <!-- 배경 별들 (보라색으로 변경) -->
            <g id="backgroundStars">
              <circle cx="80" cy="20" r="1.5" fill="#667eea" opacity="0">
                <animate attributeName="opacity"
                         values="0;0.6;0"
                         dur="3s"
                         repeatCount="indefinite"/>
              </circle>
              <circle cx="320" cy="30" r="1.5" fill="#764ba2" opacity="0">
                <animate attributeName="opacity"
                         values="0;0.6;0"
                         dur="3s"
                         begin="0.5s"
                         repeatCount="indefinite"/>
              </circle>
              <circle cx="150" cy="90" r="1.5" fill="#8b5cf6" opacity="0">
                <animate attributeName="opacity"
                         values="0;0.6;0"
                         dur="3s"
                         begin="1s"
                         repeatCount="indefinite"/>
              </circle>
              <circle cx="350" cy="100" r="1.5" fill="#667eea" opacity="0">
                <animate attributeName="opacity"
                         values="0;0.6;0"
                         dur="3s"
                         begin="1.5s"
                         repeatCount="indefinite"/>
              </circle>
              <circle cx="50" cy="60" r="1.5" fill="#764ba2" opacity="0">
                <animate attributeName="opacity"
                         values="0;0.6;0"
                         dur="3s"
                         begin="2s"
                         repeatCount="indefinite"/>
              </circle>
            </g>

            <!-- 궤도 링 (보라색) -->
            <g id="orbits" opacity="0.15">
              <ellipse cx="200" cy="60" rx="150" ry="45"
                       fill="none"
                       stroke="url(#starGradientPurple)"
                       stroke-width="0.8">
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    from="0 200 60"
                    to="360 200 60"
                    dur="20s"
                    repeatCount="indefinite"/>
              </ellipse>
              <ellipse cx="200" cy="60" rx="120" ry="35"
                       fill="none"
                       stroke="url(#starGradientPurple)"
                       stroke-width="0.6">
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    from="360 200 60"
                    to="0 200 60"
                    dur="15s"
                    repeatCount="indefinite"/>
              </ellipse>
            </g>

            <!-- 떠다니는 별 (보라색) -->
            <g id="floatingStar" filter="url(#softGlow)">
              <text x="200" y="25"
                    font-family="Arial"
                    font-size="20"
                    fill="#667eea"
                    text-anchor="middle">✦
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    from="0 200 25"
                    to="360 200 25"
                    dur="4s"
                    repeatCount="indefinite"/>
                <animate attributeName="y"
                         values="25;20;25"
                         dur="4s"
                         repeatCount="indefinite"/>
              </text>
            </g>

            <!-- 메인 로고 텍스트 -->
            <text x="200" y="70"
                  font-family="Arial Black, sans-serif"
                  font-size="72"
                  font-weight="900"
                  fill="url(#galaxyGradient)"
                  text-anchor="middle"
                  filter="url(#shadow)">CaPL
              <!-- 밝기 애니메이션 -->
              <animate attributeName="opacity"
                       values="0.9;1;0.9"
                       dur="3s"
                       repeatCount="indefinite"/>
            </text>

            <!-- 서브타이틀 (보라색) -->
            <text x="200" y="105"
                  font-family="Pretendard, Arial, sans-serif"
                  font-size="14"
                  font-weight="300"
                  letter-spacing="4"
                  fill="#7A879C"
                  opacity="0.7"
                  text-anchor="middle">당신의 꿈이 현실이 되는 곳
              <animate attributeName="opacity"
                       values="0.7;1;0.7"
                       dur="3s"
                       repeatCount="indefinite"/>
            </text>
          </svg>
        </h1>

        <div class="flex justify-center bg-[#F7FAFC] mt-[50px] h-[60px] p-[5px] rounded-[10px]">
          <router-link
              to="/login"
              class="px-8 py-4 bg-[#fff] rounded-[10px] font-semibold transition-transform w-[50%]
              items-center flex justify-center shadow-[0px_1px_8px_2px_rgba(0,0,0,0.04)] text-[#6A7AE6] font-[600]"
          >
            로그인
          </router-link>
          <router-link
              to="/signup"
              class="px-8 py-4 font-semibold transition-transform w-[50%] items-center flex justify-center text-[#7A879C]"
          >
            회원가입
          </router-link>
        </div>

        <!--        로그인 폼       -->
        <form @submit.prevent="handleLogin" class="space-y-[20px] mt-[30px] gap-[25px] flex flex-col">
          <!-- 이메일 입력 -->
          <div>
            <label for="email" class="block text-[#4A5568] text-[14px] font-medium mb-[8px]">
              이메일
            </label>
            <input
                id="email"
                v-model="formData.email"
                type="email"
                placeholder="example@email.com"
                required
                class="w-full px-[16px] py-[14px] bg-white border border-[#E2E8F0] rounded-[10px]
                     focus:outline-none focus:border-[#667eea] focus:ring-2 focus:ring-[#667eea]/20
                     transition-all text-[14px]"
            />
          </div>

          <!-- 비밀번호 입력 -->
          <div class="!mt-[8px]">
            <label for="password" class="block text-[#4A5568] text-[14px] font-medium mb-[8px]">
              비밀번호
            </label>
            <input
                id="password"
                v-model="formData.password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                required
                class="w-full px-[16px] py-[14px] bg-white border border-[#E2E8F0] rounded-[10px]
                     focus:outline-none focus:border-[#667eea] focus:ring-2 focus:ring-[#667eea]/20
                     transition-all text-[14px]"
            />
          </div>

          <!-- 자동 로그인 & 아이디/비밀번호 찾기 -->
          <div class="flex items-center justify-between">
            <label class="flex items-center cursor-pointer">
              <input
                  v-model="formData.rememberMe"
                  type="checkbox"
                  class="appearance-none w-[18px] h-[18px] bg-white border-2 border-[#E2E8F0] rounded-[4px]
         checked:bg-[#667eea] checked:border-[#667eea] relative cursor-pointer
         focus:ring-2 focus:ring-[#667eea]/20 focus:ring-offset-0"
              />
              <span class="ml-[8px] text-[#4A5568] text-[14px]">자동 로그인</span>
            </label>
            <a href="#" class="text-[#7A879C] text-[12px] md:text-[14px] hover:text-[#667eea] transition-colors">
              아이디/비밀번호 찾기
            </a>
          </div>

          <!-- 로그인 버튼 -->
          <button
              type="submit"
              class="w-full h-[50px] py-[14px] bg-[#6A7AE6] text-[#fff]
                   rounded-[10px] font-semibold text-[16px] hover:opacity-90 transition-opacity
                   shadow-[0px_4px_12px_rgba(102,126,234,0.25)]"
          >
            로그인
          </button>
        </form>

        <!-- 구분선 -->
        <div class="relative my-[30px]">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-[#E2E8F0]"></div>
          </div>
          <div class="relative flex justify-center text-[14px]">
            <span class="px-[16px] bg-[#F8F7FC] text-[#7A879C]">또는</span>
          </div>
        </div>

        <!-- 소셜 로그인 -->
        <div class="space-y-[12px]">
          <!-- 카카오 로그인 -->
          <button
              @click="handleSocialLogin('kakao')"
              class="w-full h-[50px] py-[12px] bg-[#FEE500] text-[#000000D9] rounded-[10px] font-medium text-[14px]
                   flex items-center justify-center gap-[8px] mb-[10px] hover:bg-[#FDD835] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2C5.58172 2 2 4.92893 2 8.4C2 10.5196 3.15893 12.3929 4.96964 13.5714L4.07143 17.1429C4.03571 17.2857 4.07143 17.4286 4.17857 17.5357C4.25 17.6071 4.35714 17.6429 4.46429 17.6429C4.53571 17.6429 4.57143 17.6429 4.64286 17.6071L8.60714 15.2143C9.07143 15.2857 9.53571 15.3214 10 15.3214C14.4183 15.3214 18 12.3929 18 8.92857C18 5.42857 14.4183 2 10 2Z" fill="#000000" fill-opacity="0.85"/>
            </svg>
            카카오로 시작하기
          </button>

          <!-- 네이버 로그인 -->
          <button
              @click="handleSocialLogin('naver')"
              class="w-full h-[50px] py-[12px] bg-[#03C75A] text-white rounded-[10px] font-medium text-[14px]
                   flex items-center justify-center gap-[8px] mb-[10px] hover:bg-[#02B550] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13.5 10.5L8.5 2H2V18H6.5V9.5L11.5 18H18V2H13.5V10.5Z" fill="white"/>
            </svg>
            네이버로 시작하기
          </button>

          <!-- 구글 로그인 -->
          <button
              @click="handleSocialLogin('google')"
              class="w-full h-[50px] py-[12px] bg-white text-[#3C4043] rounded-[10px] font-medium text-[14px]
                   flex items-center justify-center gap-[8px] border border-[#DADCE0] mb-[10px]
                   hover:bg-[#F8F9FA] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M18.1713 8.36792H17.5V8.33334H10V11.6667H14.7096C14.0225 13.6071 12.1763 15 10 15C7.23876 15 5.00001 12.7613 5.00001 10C5.00001 7.23876 7.23876 5.00001 10 5.00001C11.2746 5.00001 12.4342 5.48084 13.3171 6.26626L15.6742 3.90917C14.1858 2.52209 12.195 1.66667 10 1.66667C5.39792 1.66667 1.66667 5.39792 1.66667 10C1.66667 14.6021 5.39792 18.3333 10 18.3333C14.6021 18.3333 18.3333 14.6021 18.3333 10C18.3333 9.44126 18.2758 8.89584 18.1713 8.36792Z" fill="#FFC107"/>
              <path d="M2.62751 6.12126L5.36542 8.12917C6.10625 6.29501 7.90042 5.00001 10 5.00001C11.2746 5.00001 12.4342 5.48084 13.3171 6.26626L15.6742 3.90917C14.1858 2.52209 12.195 1.66667 10 1.66667C6.79917 1.66667 4.02334 3.47376 2.62751 6.12126Z" fill="#FF3D00"/>
              <path d="M10 18.3333C12.1525 18.3333 14.1083 17.5096 15.5871 16.17L13.0079 13.9875C12.1429 14.6452 11.0863 15.0009 10 15C7.83251 15 5.99209 13.6179 5.29876 11.6892L2.58126 13.7829C3.96042 16.4817 6.76126 18.3333 10 18.3333Z" fill="#4CAF50"/>
              <path d="M18.1713 8.36792H17.5V8.33334H10V11.6667H14.7096C14.3809 12.5902 13.7889 13.3972 13.0067 13.9879L13.0079 13.9871L15.5871 16.1696C15.4046 16.3354 18.3333 14.1667 18.3333 10C18.3333 9.44126 18.2758 8.89584 18.1713 8.36792Z" fill="#1976D2"/>
            </svg>
            구글로 시작하기
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 폼 데이터
const formData = ref({
  email: '',
  password: '',
  rememberMe: false
})

// 로그인 처리
const handleLogin = async () => {
  try {
    // TODO: API 호출 로직 구현
    console.log('로그인 시도:', formData.value)

    // 예시: 로그인 성공 시 홈으로 이동
    // await loginAPI(formData.value)
    // router.push('/')
  } catch (error) {
    console.error('로그인 실패:', error)
  }
}

// 소셜 로그인 처리
const handleSocialLogin = (provider: 'kakao' | 'naver' | 'google') => {
  // TODO: 각 소셜 로그인 처리 로직 구현
  console.log(`${provider} 로그인 시도`)

  switch(provider) {
    case 'kakao':
      // Kakao OAuth 처리
      break
    case 'naver':
      // Naver OAuth 처리
      break
    case 'google':
      // Google OAuth 처리
      break
  }
}
</script>
<style scoped>
/* 체크박스 커스텀 */
input[type="checkbox"] {
  @apply appearance-none;
  @apply w-[18px] h-[18px];
  @apply bg-white border-2 border-[#E2E8F0] rounded-[4px];
  @apply cursor-pointer;
}

input[type="checkbox"]:checked {
  @apply bg-[#667eea] border-[#667eea];
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
}

input[type="checkbox"]:focus {
  @apply ring-2 ring-[#667eea]/20 ring-offset-0;
}
</style>