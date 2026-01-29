$(document).ready(function() {
    // 1. مصفوفة البيانات (تأكد من وجودها لعرض الجدول)
    const locations = [
        { type: "طرد غذائي", area: "شمال غزة", spot: "مدرسة جباليا", status: "متاح" },
        { type: "طرود صحية", area: "الرمال", spot: "مركز الوفاء", status: "قيد التوزيع" },
        { type: "مساعدات نقدية", area: "خانيونس", spot: "نادي الشباب", status: "متاح" },
        { type: "مياه وإيواء", area: "رفح", spot: "مخيم الصمود", status: "مكتمل" },
        { type: "طرد غذائي", area: "دير البلح", spot: "مركز الخدمات", status: "متاح" }
    ];

    // 2. دالة عرض البيانات في الجدول (DOM Manipulation)
    function renderTable() {
        let tableRows = "";
        
        $.each(locations, function(index, item) {
            // تحديد لون الحالة (Condition)
            let badgeClass = "";
            if (item.status === "متاح") {
                badgeClass = "bg-success";
            } else if (item.status === "قيد التوزيع") {
                badgeClass = "bg-warning text-dark";
            } else {
                badgeClass = "bg-danger";
            }
            
            // بناء الصفوف
            tableRows += <tr>
                <td class="fw-bold">${item.type}</td>
                <td>${item.area}</td>
                <td>${item.spot}</td>
                <td><span class="badge ${badgeClass}">${item.status}</span></td>
            </tr>;
        });

        // وضع الصفوف داخل الـ tbody (تأكد أن الـ ID مطابق لـ HTML)
        $('#distributionTableBody').html(tableRows);
    }

    // استدعاء الدالة فوراً ليظهر الجدول
    renderTable();

    // 3. ميزة البحث الفوري (Search Filter) - لكي يعمل حقل البحث
    $("#distributionSearch").on("keyup", function() {
        let value = $(this).val().toLowerCase();
        $("#distributionTableBody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});