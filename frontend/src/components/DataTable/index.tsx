const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Anakin Barris</td>
                        <td>34</td>
                        <td>25</td>
                        <td>22456.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Kal-el Bowel</td>
                        <td>50</td>
                        <td>52</td>
                        <td>52879.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Logan Snider</td>
                        <td>26</td>
                        <td>32</td>
                        <td>32456.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Padmé Silver</td>
                        <td>40</td>
                        <td>32</td>
                        <td>20789.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Karina Harrys</td>
                        <td>31</td>
                        <td>20</td>
                        <td>13256.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Bob McDowel</td>
                        <td>20</td>
                        <td>19</td>
                        <td>12450.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Selena Jackart</td>
                        <td>28</td>
                        <td>27</td>
                        <td>11000.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;