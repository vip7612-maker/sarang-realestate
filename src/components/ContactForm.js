"use client";

import { useState } from "react";
import { submitInquiry } from "@/app/actions";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState("");

  async function handleAction(formData) {
    setStatus("loading");
    setMessage("");
    
    const result = await submitInquiry(formData);
    
    if (result.success) {
      setStatus("success");
      setMessage(result.message);
      // form reset handled by React automatically after native form validation passes
    } else {
      setStatus("error");
      setMessage(result.message);
    }
  }

  return (
    <div className="form-wrapper">
      <form action={handleAction}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">이름 *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="form-input" 
            placeholder="홍길동" 
            required 
            disabled={status === "loading" || status === "success"}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">연락처 *</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            className="form-input" 
            placeholder="010-1234-5678" 
            required 
            disabled={status === "loading" || status === "success"}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inquiry" className="form-label">문의 내용 (선택)</label>
          <textarea 
            id="inquiry" 
            name="inquiry" 
            className="form-input" 
            rows="4" 
            placeholder="궁금하신 점을 남겨주시면 친절하게 상담해 드립니다."
            disabled={status === "loading" || status === "success"}
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="form-submit" 
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" ? "접수 중..." : status === "success" ? "접수 완료" : "무료 상담 신청하기"}
        </button>
      </form>

      {message && (
        <div className={`message-box ${status === "success" ? "message-success" : "message-error"}`}>
          {message}
        </div>
      )}
    </div>
  );
}
