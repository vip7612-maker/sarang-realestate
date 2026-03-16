import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "홍천 대상웰나움 입주 안내 | 사랑부동산",
  description: "홍천 대상웰나움 분양 및 입주 정보. 프리미엄 주거 환경을 경험하세요. 사랑부동산에서 VIP 상담을 도와드립니다.",
};

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="badge">⭐ 홍천의 새로운 랜드마크</span>
            <h1>차원이 다른<br/>프리미엄 라이프의 시작</h1>
            <p>
              홍천 대상웰나움에서 가장 특별한 VIP 입주 기회를 잡으세요. 
              사랑부동산이 투명하고 꼼꼼한 맞춤형 컨설팅을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2>홍천 대상웰나움 만의 특화 가치</h2>
          <p style={{ margin: "0 auto" }}>완벽한 주거 환경을 위해 설계된 하이엔드 단지 특장점</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🅿️</span>
            <h3>홍천 최대 주차공간 확보</h3>
            <p style={{ fontSize: "1rem", marginTop: "1rem", marginBottom: "0" }}>
              세대당 주차대수 1.6대로 주차공간은 Full, 
              주차 스트레스는 Zero! 여유로운 주차가 가능합니다.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🏞️</span>
            <h3>홍천강 특급 파노라마 조망</h3>
            <p style={{ fontSize: "1rem", marginTop: "1rem", marginBottom: "0" }}>
              홍천강 조망권과 수변 산책로를 품은 친환경 라이프. 
              홍천 시내까지 한눈에 펼쳐지는 확 트인 뷰를 누리세요.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🏫</span>
            <h3>안심 도보통학과 최상위 학군</h3>
            <p style={{ fontSize: "1rem", marginTop: "1rem", marginBottom: "0" }}>
              홍천여중 최인접! 우수한 교육 프리미엄과 함께 
              우리아이 안심 도보 통학이 가능한 명품 교육단지입니다.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🏢</span>
            <h3>압도적 규모의 커뮤니티</h3>
            <p style={{ fontSize: "1rem", marginTop: "1rem", marginBottom: "0" }}>
              피트니스센터, 클린워시존, 스터디룸&카페, 게스트룸,
              키즈스테이션까지 입주민 전용 럭셔리 휴게공간을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="container" id="contact">
        <div className="form-section">
          <h2>VIP 맞춤 상담 신청</h2>
          <p style={{ margin: "0 auto 2.5rem", maxWidth: "100%" }}>
            사랑부동산의 전문가가 고객님의 라이프스타일에 딱 맞는 최적의 매물을 추천해 드립니다.
          </p>
          <ContactForm />
        </div>
      </section>

      <footer>
        <div className="container" style={{ fontSize: "0.875rem" }}>
          <p style={{ margin: "0 auto", fontSize: "1rem", fontWeight: "600", color: "#fff", marginBottom: "0.5rem" }}>사랑공인중개사사무소</p>
          대표 김사랑 | 등록번호: 123-45-67890 | 강원도 홍천군 홍천읍 연봉리 123-4<br/>
          &copy; {new Date().getFullYear()} Sarang Real Estate. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
