<html>

<head>
    <title>Faktur Pembayaran</title>
    <style>
        #tabel {
            font-size: 15px;
            border-collapse: collapse;
        }

        #tabel td {
            padding-left: 5px;
            border: 1px solid black;
        }

        .note {
            text-align: left;
            margin-left: 50px;
            /* Reset margin-left */
        }
    </style>
    <style>
        .ttd td,
        .ttd th {
            padding-bottom: 4em;
        }
    </style>
</head>

<body style='font-family:tahoma; font-size:8pt;'>
    <center>
        <table style='width:1000px; font-size:8pt; font-family:calibri; border-collapse: collapse;' border='0'>
            <td width='70%' align='left' style='padding-right:80px; vertical-align:top'>
                <span style='font-size:12pt'><b>Technopark Raflesia</b></span></br>
                SMKN 1 KOTA BENGKULU
            </td>
            <td style='vertical-align:top' width='30%' align='left'>
                <b><span style='font-size:12pt'>FAKTUR PENJUALAN</span></b></br>
                No Invoice. : {{ $transaction->kode_inv }}</br>
                Tanggal : {{ $transaction->created_at->isoFormat('dddd, D MMMM Y') }}
            </td>
        </table>
        <table style='width:1000px; font-size:8pt; font-family:calibri; border-collapse: collapse;' border='0'>


        </table>
        <table cellspacing='0' style='width:1000px; font-size:8pt; font-family:calibri;  border-collapse: collapse;'
            border='1'>
            <tbody>
                <tr align='center'>
                    <td width='20%'>Nama Barang</td>
                    <td width='4%'>Qty</td>
                    <td width='10%'>Harga</td>
                    <td width='7%'>Subtotal</td>


                    @foreach ($orders as $order)
                <tr>
                    <td>{{ $order->nama_barang }}</td>
                    <td>{{ $order->qty }}</td>
                    <td>@currency($order->harga_jual)</td>
                    <td>@currency($order->subtotal)</td>
                </tr>
                @endforeach



                <tr>
                    <td colspan='5'>
                        <div style='text-align:right'>Total Yang Harus Di Bayar Adalah : </div>
                    </td>
                    <td style='text-align:right'>@currency($transaction->total)</td>
                </tr>
            </tbody>
            {{-- <tfoot>
                <tr>
                    <td>Keterangan</td>
                    <td colspan="3">{{ $transaction->keterangan }}</td>
                </tr>
                <tr>
                    <td>Barang Diterima Tanggal</td>
                    <td colspan="3"></td>
                </tr>
                <tr class="ttd">
                    <th colspan="1">Penerima</th>
                    <th colspan="2">Disetujui</th>
                    <th colspan="3">Pengirim</th>
                </tr>
                <tr>
                    <td colspan="1" style="text-align: center;">{{ $transaction->nama_pelanggan }}</td>

                    <td colspan="2" style="text-align: center;">{{ $transaction->nama_petugas }}</td>
                    <td colspan="3" style="text-align: center;">..........</td>
                </tr>
            </tfoot> --}}
        </table>
    </center>
</body>

</html>
<script>
    window.onload = function() {
        window.print();
    }
</script>
