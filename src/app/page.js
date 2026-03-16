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
          <h2>대상웰나움 프리미엄 Point</h2>
          <p style={{ margin: "0 auto" }}>완벽한 주거 환경을 위해 설계된 하이엔드 단지 특장점</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🌳</span>
            <h3>초록빛 쾌적한 자연환경</h3>
            <p style={{ fontSize: "1rem", marginTop: "1rem", marginBottom: "0" }}>
              단지 주변을 둘러싼 청정 자연과 도보 거리에 위치한 산책로가 
              여유로운 힐링 라이프를 선사합니다.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🏫</span>
            <h3>원스톱 명품 교육인프라</h3>
            <p style={{ fontSize: "1rem", marginTop: "1rem", marginBottom: "0" }}>
              인근 명문 초·중·고 학군 밀집 지역으로 자녀들의 안전한 통학과 
              우수한 면학 분위기가 보장됩니다.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🚇</span>
            <h3>사통팔달 쾌속 교통망</h3>
            <p style={{ fontSize: "1rem", marginTop: "1rem", marginBottom: "0" }}>
              주요 도심 및 타 지역 입출입이 편리한 최상의 교통 인프라가 
              당신의 소중한 시간을 절약해 드립니다.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💎</span>
            <h3>하이엔드 평면 특화설계</h3>
            <p style={{ fontSize: "1rem", marginTop: "1rem", marginBottom: "0" }}>
              채광과 통풍을 극대화한 스마트 4Bay 구조와 넉넉한 펜트리 등 
              혁신적인 공간 활용을 경험하세요.
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
