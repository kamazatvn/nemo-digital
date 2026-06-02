// Modal content
const privacyContent = `
  <h3 class="font-heading text-2xl uppercase mb-6 text-nemo-orange">CHÍNH SÁCH BẢO MẬT (PRIVACY POLICY)</h3>
  <p class="text-xs opacity-60 mb-6"><em>Cập nhật lần cuối: 2026</em></p>
  
  <p class="mb-4">Nemo Digital tôn trọng và cam kết bảo vệ quyền riêng tư của bạn. Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin khi bạn tương tác với website của chúng tôi.</p>

  <h4 class="font-bold text-lg mb-3 mt-6">1. Thông Tin Chúng Tôi Thu Thập</h4>
  <p class="mb-4">Chúng tôi thu thập thông tin khi bạn chủ động để lại dữ liệu tại các form đăng ký tư vấn hoặc liên hệ trên website, bao gồm:</p>
  <ul class="list-disc list-inside mb-4 space-y-1">
    <li>Họ và tên</li>
    <li>Số điện thoại / Zalo / Telegram</li>
    <li>Địa chỉ Email</li>
    <li>Tên doanh nghiệp hoặc liên kết đến kênh mạng xã hội của bạn (nếu có)</li>
  </ul>
  <p class="mb-4">Ngoài ra, hệ thống tự động thu thập một số thông tin ẩn danh thông qua Google Analytics để tối ưu trải nghiệm người dùng, bao gồm: địa chỉ IP, loại trình duyệt, thời gian truy cập và các trang bạn đã xem trên website.</p>

  <h4 class="font-bold text-lg mb-3 mt-6">2. Mục Đích Sử Dụng Thông Tin</h4>
  <p class="mb-4">Nemo Digital sử dụng thông tin của bạn vào các mục đích chính đáng sau:</p>
  <ul class="list-disc list-inside mb-4 space-y-1">
    <li>Liên hệ để tư vấn giải pháp, báo giá dịch vụ theo yêu cầu của bạn</li>
    <li>Gửi thông tin cập nhật về tiến độ công việc hoặc các tài liệu chuyên môn có ích</li>
    <li>Cải thiện chất lượng nội dung và giao diện của website</li>
  </ul>

  <h4 class="font-bold text-lg mb-3 mt-6">3. Cam Kết Bảo Mật Dữ Liệu</h4>
  <p class="mb-4">Chúng tôi áp dụng các biện pháp bảo mật kỹ thuật phù hợp để bảo vệ dữ liệu cá nhân của bạn khỏi việc truy cập, thay đổi hoặc tiết lộ trái phép. Thông tin của bạn được lưu trữ an toàn trong hệ thống nội bộ của Nemo Digital.</p>

  <h4 class="font-bold text-lg mb-3 mt-6">4. Chia Sẻ Thông Tin Với Bên Thứ Ba</h4>
  <p class="mb-4">Nemo Digital <strong>tuyệt đối không bán, cho thuê hoặc trao đổi</strong> thông tin cá nhân của bạn cho bất kỳ bên thứ ba nào vì mục đích thương mại. Thông tin chỉ được chia sẻ trong các trường hợp:</p>
  <ul class="list-disc list-inside mb-4 space-y-1">
    <li>Có sự đồng ý trước bằng văn bản của bạn</li>
    <li>Yêu cầu bắt buộc từ cơ quan pháp luật có thẩm quyền</li>
  </ul>

  <h4 class="font-bold text-lg mb-3 mt-6">5. Quyền Của Bạn Đối Với Dữ Liệu</h4>
  <p class="mb-4">Bạn có quyền yêu cầu chúng tôi kiểm tra, cập nhật, sửa đổi hoặc xóa hoàn toàn thông tin cá nhân của bạn khỏi hệ thống lưu trữ của Nemo bất kỳ lúc nào bằng cách liên hệ trực tiếp qua Email hoặc Hotline được công bố trên website.</p>
`;

const termsContent = `
  <h3 class="font-heading text-2xl uppercase mb-6 text-nemo-orange">ĐIỀU KHOẢN DỊCH VỤ (TERMS OF SERVICE)</h3>
  <p class="text-xs opacity-60 mb-6"><em>Cập nhật lần cuối: 2026</em></p>
  
  <p class="mb-4">Chào mừng bạn đến với Nemo Digital. Khi bạn truy cập website hoặc sử dụng các dịch vụ của chúng tôi, bạn đồng ý tuân thủ các điều khoản và điều kiện dưới đây.</p>

  <h4 class="font-bold text-lg mb-3 mt-6">1. Dịch Vụ Cung Cấp</h4>
  <p class="mb-4">Nemo Digital cung cấp các dịch vụ bao gồm nhưng không giới hạn ở: sản xuất nội dung ngắn (short-form content), tư vấn chiến lược media, quản lý chiến dịch quảng cáo và các dịch vụ digital marketing liên quan. Chi tiết về phạm vi công việc, tiến độ và chi phí sẽ được quy định rõ trong từng Hợp đồng dịch vụ riêng biệt ký kết giữa hai bên.</p>

  <h4 class="font-bold text-lg mb-3 mt-6">2. Trách Nhiệm Của Khách Hàng</h4>
  <p class="mb-4">Để đảm bảo chiến dịch đạt hiệu quả tốt nhất, khách hàng có trách nhiệm:</p>
  <ul class="list-disc list-inside mb-4 space-y-1">
    <li>Cung cấp đầy đủ, chính xác và đúng hạn các thông tin, tư liệu, hình ảnh hoặc tài khoản cần thiết theo yêu cầu của dự án</li>
    <li>Chịu trách nhiệm về tính hợp pháp và bản quyền của các tư liệu do mình cung cấp</li>
    <li>Thực hiện nghĩa vụ thanh toán đúng hạn theo thỏa thuận trong hợp đồng</li>
  </ul>

  <h4 class="font-bold text-lg mb-3 mt-6">3. Quyền Sở Hữu Trí Tuệ</h4>
  <p class="mb-4"><strong>Tư liệu bàn giao:</strong> Sau khi khách hàng hoàn thành toàn bộ nghĩa vụ thanh toán, quyền sở hữu sản phẩm cuối cùng (video, hình ảnh, bài viết đã nghiệm thu) sẽ thuộc về khách hàng.</p>
  <p class="mb-4"><strong>Tài sản của Nemo:</strong> Các ý tưởng, kịch bản gốc, công cụ độc quyền hoặc tệp dự án (source files) được Nemo Digital sử dụng để tạo ra sản phẩm sẽ thuộc quyền sở hữu trí tuệ của Nemo Digital, trừ khi có thỏa thuận khác bằng văn bản.</p>
  <p class="mb-4"><strong>Quyền quảng bá:</strong> Nemo Digital có quyền sử dụng một phần sản phẩm đã hoàn thành (hoặc thông tin case study công khai) để làm portfolio quảng bá trên website và các kênh truyền thông của mình.</p>

  <h4 class="font-bold text-lg mb-3 mt-6">4. Giới Hạn Trách Nhiệm</h4>
  <p class="mb-4">Nemo Digital cam kết tối ưu hóa các chiến dịch theo các chỉ số đã cam kết. Tuy nhiên, chúng tôi không chịu trách nhiệm cho các thiệt hại gián tiếp phát sinh từ các yếu tố bất khả kháng hoặc các thay đổi đột ngột từ thuật toán của bên thứ ba (TikTok, Facebook, Google, v.v.).</p>
`;

// Global modal functions
function openModal(type) {
  const modal = document.getElementById('policyModal');
  const title = document.getElementById('modalTitle');
  const content = document.getElementById('modalContent');

  if (type === 'privacy') {
    title.textContent = 'Chính sách bảo mật';
    content.innerHTML = privacyContent;
  } else if (type === 'terms') {
    title.textContent = 'Điều khoản dịch vụ';
    content.innerHTML = termsContent;
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('policyModal');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-8");
        entry.target.classList.add("opacity-100", "translate-y-0");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll(".fade-in-section");
  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.dataset.target, 10);
        const duration = 1000;
        const start = Date.now();

        const animate = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const current = Math.floor(progress * target);
          counter.textContent = current;

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            counter.textContent = target;
          }
        };

        animate();
        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  const counters = document.querySelectorAll(".scroll-counter");
  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });

  // Close modal when clicking outside
  const modal = document.getElementById('policyModal');
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === this) {
        closeModal();
      }
    });
  }

  // Newsletter Form Submission Handling
  const form = document.getElementById("newsletterForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const btn = form.querySelector("button");
      const originalText = btn.innerHTML;

      btn.innerHTML = "Đã đăng ký thành công &check;";
      btn.classList.replace("bg-nemo-orange", "bg-nemo-beige");

      form.reset();

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.classList.replace("bg-nemo-beige", "bg-nemo-orange");
      }, 3000);
    });
  }
});
