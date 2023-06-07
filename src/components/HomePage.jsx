import { Typography, Row, Col, Statistic } from "antd";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi";

const HomePage = () => {
	const { Title } = Typography;
	const { data, isFetching } = useGetCryptosQuery();
	console.log(data);

	return (
		<>
			<Title level={2} className="heading">
				Global Crypto Stats
			</Title>
			<Row>
				<Col span={12}>
					{" "}
					<Statistic title="Total Cryptocurrencies" value="4" />
				</Col>
				<Col span={12}>
					<Statistic title="Total Exchanges" value={millify(2)} />
				</Col>
				<Col span={12}>
					<Statistic title="Total Market Cap:" value={`$2`} />
				</Col>
				<Col span={12}>
					<Statistic title="Total 24h Volume" value={`$2`} />
				</Col>
				<Col span={12}>
					<Statistic title="Total Cryptocurrencies" value={2} />
				</Col>
				<Col span={12}>
					<Statistic title="Total Markets" value={millify(2)} />
				</Col>
			</Row>
		</>
	);
};
export default HomePage;
