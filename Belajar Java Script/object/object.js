var mahasiswa = {
    nama : 'wahid',
    lulus : true,
    IPSemester : [2.90, 3.25, 3.10, 2.88, 3.04],
    IPKumulatif : function() {
        var total = 0;
        var ips = this.IPSemester;
        for( var i = 0; i < ips.length; i++) {
            total += ips[i];
        }
        return total/ips.length;
    }
}
mahasiswa.IPKumulatif();
