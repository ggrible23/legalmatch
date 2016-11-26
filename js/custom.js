var $j = jQuery.noConflict();

$j(document).ready(function(){
    
    $j("#zip_code").keyup(function(){
        var $zip_code = $j(this).val();

        if($zip_code == '00000') {
            $j(".search-result-zip-code").show();
        } else {
            $j(".search-result-zip-code").hide();
        }
    });
    
    $j("#category").on("change", function() {
        $j("#choose_category").modal('show');
    });
});