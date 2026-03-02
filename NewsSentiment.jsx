import { Card, CardContent, Typography, Chip } from "@mui/material";

export default function NewsSentiment({ sentiment }) {
  const color =
    sentiment === "Bullish"
      ? "#22c55e"
      : sentiment === "Bearish"
      ? "#ef4444"
      : "#f59e0b";

  return (
    <Card elevation={0} sx={{ mt: 4, border: `1px solid ${color}` }}>
      <CardContent>
        <Typography variant="h6">
          Global Market Sentiment
        </Typography>

        <Chip
          label={sentiment}
          sx={{
            mt: 2,
            backgroundColor: color,
            color: "#fff",
            fontWeight: 600,
          }}
        />
      </CardContent>
    </Card>
  );
}