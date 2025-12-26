// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { Badge } from '@/components/ui/badge';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
// import { useEffect, useState } from 'react';
// import { getContactSubmissions, getQuoteRequests, updateContactSubmissionStatus, updateQuoteRequestStatus, deleteContactSubmission, deleteQuoteRequest } from '@/db/api';
// import type { ContactSubmission, QuoteRequest } from '@/types';
// import { useToast } from '@/hooks/use-toast';
// import { Search, Eye, CheckCircle, Trash2 } from 'lucide-react';

// export default function AdminSubmissions() {
//   const { toast } = useToast();
//   const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
//   const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>([]);
//   const [contactPage, setContactPage] = useState(1);
//   const [quotePage, setQuotePage] = useState(1);
//   const [contactTotal, setContactTotal] = useState(0);
//   const [quoteTotal, setQuoteTotal] = useState(0);
//   const [contactStatus, setContactStatus] = useState('all');
//   const [quoteStatus, setQuoteStatus] = useState('all');
//   const [contactSearch, setContactSearch] = useState('');
//   const [quoteSearch, setQuoteSearch] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);
//   const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);

//   const pageSize = 10;

//   useEffect(() => {
//     loadContactSubmissions();
//   }, [contactPage, contactStatus, contactSearch]);

//   useEffect(() => {
//     loadQuoteRequests();
//   }, [quotePage, quoteStatus, quoteSearch]);

//   const loadContactSubmissions = async () => {
//     setLoading(true);
//     try {
//       const { data, count } = await getContactSubmissions(
//         contactPage,
//         pageSize,
//         contactStatus,
//         contactSearch
//       );
//       setContactSubmissions(data);
//       setContactTotal(count);
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to load contact submissions',
//         variant: 'destructive',
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const loadQuoteRequests = async () => {
//     setLoading(true);
//     try {
//       const { data, count } = await getQuoteRequests(
//         quotePage,
//         pageSize,
//         quoteStatus,
//         quoteSearch
//       );
//       setQuoteRequests(data);
//       setQuoteTotal(count);
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to load quote requests',
//         variant: 'destructive',
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleContactStatusChange = async (id: string, status: 'pending' | 'completed') => {
//     try {
//       await updateContactSubmissionStatus(id, status);
//       toast({
//         title: 'Status updated',
//         description: 'Contact submission status has been updated',
//       });
//       loadContactSubmissions();
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to update status',
//         variant: 'destructive',
//       });
//     }
//   };

//   const handleQuoteStatusChange = async (id: string, status: 'pending' | 'completed') => {
//     try {
//       await updateQuoteRequestStatus(id, status);
//       toast({
//         title: 'Status updated',
//         description: 'Quote request status has been updated',
//       });
//       loadQuoteRequests();
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to update status',
//         variant: 'destructive',
//       });
//     }
//   };

//   const handleDeleteContact = async (id: string) => {
//     if (!confirm('Are you sure you want to delete this submission?')) return;
//     try {
//       await deleteContactSubmission(id);
//       toast({
//         title: 'Deleted',
//         description: 'Contact submission has been deleted',
//       });
//       loadContactSubmissions();
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to delete submission',
//         variant: 'destructive',
//       });
//     }
//   };

//   const handleDeleteQuote = async (id: string) => {
//     if (!confirm('Are you sure you want to delete this request?')) return;
//     try {
//       await deleteQuoteRequest(id);
//       toast({
//         title: 'Deleted',
//         description: 'Quote request has been deleted',
//       });
//       loadQuoteRequests();
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to delete request',
//         variant: 'destructive',
//       });
//     }
//   };

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit',
//     });
//   };

//   return (
//     <div className="space-y-8">
//       <div>
//         <h1 className="text-3xl font-bold text-foreground">Submissions</h1>
//         <p className="mt-2 text-muted-foreground">Manage contact forms and quote requests</p>
//       </div>

//       <Tabs defaultValue="contacts" className="w-full">
//         <TabsList>
//           <TabsTrigger value="contacts">Contact Forms ({contactTotal})</TabsTrigger>
//           <TabsTrigger value="quotes">Quote Requests ({quoteTotal})</TabsTrigger>
//         </TabsList>

//         {/* Contact Submissions Tab */}
//         <TabsContent value="contacts" className="space-y-4">
//           <Card className="border-border">
//             <CardHeader>
//               <CardTitle>Contact Submissions</CardTitle>
//               <CardDescription>View and manage contact form submissions</CardDescription>
//             </CardHeader>
//             <CardContent>
//               {/* Filters */}
//               <div className="mb-4 flex flex-col gap-4 sm:flex-row">
//                 <div className="relative flex-1">
//                   <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//                   <Input
//                     placeholder="Search by name, email, or message..."
//                     value={contactSearch}
//                     onChange={(e) => {
//                       setContactSearch(e.target.value);
//                       setContactPage(1);
//                     }}
//                     className="pl-9"
//                   />
//                 </div>
//                 <Select value={contactStatus} onValueChange={(value) => {
//                   setContactStatus(value);
//                   setContactPage(1);
//                 }}>
//                   <SelectTrigger className="w-full sm:w-40">
//                     <SelectValue placeholder="Filter by status" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Status</SelectItem>
//                     <SelectItem value="pending">Pending</SelectItem>
//                     <SelectItem value="completed">Completed</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Table */}
//               <div className="overflow-x-auto">
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Name</TableHead>
//                       <TableHead>Email</TableHead>
//                       <TableHead>Phone</TableHead>
//                       <TableHead>Date</TableHead>
//                       <TableHead>Status</TableHead>
//                       <TableHead>Actions</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {loading ? (
//                       <TableRow>
//                         <TableCell colSpan={6} className="text-center">Loading...</TableCell>
//                       </TableRow>
//                     ) : contactSubmissions.length === 0 ? (
//                       <TableRow>
//                         <TableCell colSpan={6} className="text-center">No submissions found</TableCell>
//                       </TableRow>
//                     ) : (
//                       contactSubmissions.map((submission) => (
//                         <TableRow key={submission.id}>
//                           <TableCell className="font-medium">{submission.name}</TableCell>
//                           <TableCell>{submission.email}</TableCell>
//                           <TableCell>{submission.phone || 'N/A'}</TableCell>
//                           <TableCell>{formatDate(submission.created_at)}</TableCell>
//                           <TableCell>
//                             <Badge variant={submission.status === 'completed' ? 'default' : 'secondary'}>
//                               {submission.status}
//                             </Badge>
//                           </TableCell>
//                           <TableCell>
//                             <div className="flex gap-2">
//                               <Button
//                                 size="sm"
//                                 variant="outline"
//                                 onClick={() => setSelectedContact(submission)}
//                               >
//                                 <Eye className="h-4 w-4" />
//                               </Button>
//                               <Button
//                                 size="sm"
//                                 variant="outline"
//                                 onClick={() => handleContactStatusChange(
//                                   submission.id,
//                                   submission.status === 'pending' ? 'completed' : 'pending'
//                                 )}
//                               >
//                                 <CheckCircle className="h-4 w-4" />
//                               </Button>
//                               <Button
//                                 size="sm"
//                                 variant="outline"
//                                 onClick={() => handleDeleteContact(submission.id)}
//                               >
//                                 <Trash2 className="h-4 w-4" />
//                               </Button>
//                             </div>
//                           </TableCell>
//                         </TableRow>
//                       ))
//                     )}
//                   </TableBody>
//                 </Table>
//               </div>

//               {/* Pagination */}
//               {contactTotal > pageSize && (
//                 <div className="mt-4 flex items-center justify-between">
//                   <div className="text-sm text-muted-foreground">
//                     Showing {(contactPage - 1) * pageSize + 1} to {Math.min(contactPage * pageSize, contactTotal)} of {contactTotal}
//                   </div>
//                   <div className="flex gap-2">
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       disabled={contactPage === 1}
//                       onClick={() => setContactPage(contactPage - 1)}
//                     >
//                       Previous
//                     </Button>
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       disabled={contactPage * pageSize >= contactTotal}
//                       onClick={() => setContactPage(contactPage + 1)}
//                     >
//                       Next
//                     </Button>
//                   </div>
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         </TabsContent>

//         {/* Quote Requests Tab */}
//         <TabsContent value="quotes" className="space-y-4">
//           <Card className="border-border">
//             <CardHeader>
//               <CardTitle>Quote Requests</CardTitle>
//               <CardDescription>View and manage quote requests</CardDescription>
//             </CardHeader>
//             <CardContent>
//               {/* Filters */}
//               <div className="mb-4 flex flex-col gap-4 sm:flex-row">
//                 <div className="relative flex-1">
//                   <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//                   <Input
//                     placeholder="Search by name, company, origin, or destination..."
//                     value={quoteSearch}
//                     onChange={(e) => {
//                       setQuoteSearch(e.target.value);
//                       setQuotePage(1);
//                     }}
//                     className="pl-9"
//                   />
//                 </div>
//                 <Select value={quoteStatus} onValueChange={(value) => {
//                   setQuoteStatus(value);
//                   setQuotePage(1);
//                 }}>
//                   <SelectTrigger className="w-full sm:w-40">
//                     <SelectValue placeholder="Filter by status" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Status</SelectItem>
//                     <SelectItem value="pending">Pending</SelectItem>
//                     <SelectItem value="completed">Completed</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Table */}
//               <div className="overflow-x-auto">
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Name</TableHead>
//                       <TableHead>Company</TableHead>
//                       <TableHead>Route</TableHead>
//                       <TableHead>Type</TableHead>
//                       <TableHead>Date</TableHead>
//                       <TableHead>Status</TableHead>
//                       <TableHead>Actions</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {loading ? (
//                       <TableRow>
//                         <TableCell colSpan={7} className="text-center">Loading...</TableCell>
//                       </TableRow>
//                     ) : quoteRequests.length === 0 ? (
//                       <TableRow>
//                         <TableCell colSpan={7} className="text-center">No requests found</TableCell>
//                       </TableRow>
//                     ) : (
//                       quoteRequests.map((request) => (
//                         <TableRow key={request.id}>
//                           <TableCell className="font-medium">{request.name}</TableCell>
//                           <TableCell>{request.company || 'N/A'}</TableCell>
//                           <TableCell>{request.origin} → {request.destination}</TableCell>
//                           <TableCell className="capitalize">{request.shipment_type}</TableCell>
//                           <TableCell>{formatDate(request.created_at)}</TableCell>
//                           <TableCell>
//                             <Badge variant={request.status === 'completed' ? 'default' : 'secondary'}>
//                               {request.status}
//                             </Badge>
//                           </TableCell>
//                           <TableCell>
//                             <div className="flex gap-2">
//                               <Button
//                                 size="sm"
//                                 variant="outline"
//                                 onClick={() => setSelectedQuote(request)}
//                               >
//                                 <Eye className="h-4 w-4" />
//                               </Button>
//                               <Button
//                                 size="sm"
//                                 variant="outline"
//                                 onClick={() => handleQuoteStatusChange(
//                                   request.id,
//                                   request.status === 'pending' ? 'completed' : 'pending'
//                                 )}
//                               >
//                                 <CheckCircle className="h-4 w-4" />
//                               </Button>
//                               <Button
//                                 size="sm"
//                                 variant="outline"
//                                 onClick={() => handleDeleteQuote(request.id)}
//                               >
//                                 <Trash2 className="h-4 w-4" />
//                               </Button>
//                             </div>
//                           </TableCell>
//                         </TableRow>
//                       ))
//                     )}
//                   </TableBody>
//                 </Table>
//               </div>

//               {/* Pagination */}
//               {quoteTotal > pageSize && (
//                 <div className="mt-4 flex items-center justify-between">
//                   <div className="text-sm text-muted-foreground">
//                     Showing {(quotePage - 1) * pageSize + 1} to {Math.min(quotePage * pageSize, quoteTotal)} of {quoteTotal}
//                   </div>
//                   <div className="flex gap-2">
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       disabled={quotePage === 1}
//                       onClick={() => setQuotePage(quotePage - 1)}
//                     >
//                       Previous
//                     </Button>
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       disabled={quotePage * pageSize >= quoteTotal}
//                       onClick={() => setQuotePage(quotePage + 1)}
//                     >
//                       Next
//                     </Button>
//                   </div>
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>

//       {/* Contact Detail Dialog */}
//       <Dialog open={!!selectedContact} onOpenChange={() => setSelectedContact(null)}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Contact Submission Details</DialogTitle>
//             <DialogDescription>Full details of the contact form submission</DialogDescription>
//           </DialogHeader>
//           {selectedContact && (
//             <div className="space-y-4">
//               <div>
//                 <div className="text-sm font-medium text-muted-foreground">Name</div>
//                 <div className="text-base">{selectedContact.name}</div>
//               </div>
//               <div>
//                 <div className="text-sm font-medium text-muted-foreground">Email</div>
//                 <div className="text-base">{selectedContact.email}</div>
//               </div>
//               <div>
//                 <div className="text-sm font-medium text-muted-foreground">Phone</div>
//                 <div className="text-base">{selectedContact.phone || 'Not provided'}</div>
//               </div>
//               <div>
//                 <div className="text-sm font-medium text-muted-foreground">Message</div>
//                 <div className="text-base whitespace-pre-wrap">{selectedContact.message}</div>
//               </div>
//               <div>
//                 <div className="text-sm font-medium text-muted-foreground">Submitted</div>
//                 <div className="text-base">{formatDate(selectedContact.created_at)}</div>
//               </div>
//               <div>
//                 <div className="text-sm font-medium text-muted-foreground">Status</div>
//                 <Badge variant={selectedContact.status === 'completed' ? 'default' : 'secondary'}>
//                   {selectedContact.status}
//                 </Badge>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>

//       {/* Quote Detail Dialog */}
//       <Dialog open={!!selectedQuote} onOpenChange={() => setSelectedQuote(null)}>
//         <DialogContent className="max-w-2xl">
//           <DialogHeader>
//             <DialogTitle>Quote Request Details</DialogTitle>
//             <DialogDescription>Full details of the quote request</DialogDescription>
//           </DialogHeader>
//           {selectedQuote && (
//             <div className="grid gap-4 sm:grid-cols-2">
//               <div>
//                 <div className="text-sm font-medium text-muted-foreground">Name</div>
//                 <div className="text-base">{selectedQuote.name}</div>
//               </div>
//               <div>
//                 <div className="text-sm font-medium text-muted-foreground">Email</div>
//                 <div className="text-base">{selectedQuote.email}</div>
//               </div>
//               <div>
//                 <div className="text-sm font-medium text-muted-foreground">Phone</div>
//                 <div className="text-base">{selectedQuote.phone || 'Not provided'}</div>
//               </div>
//               <div>
//                 <div className="text-sm font-medium text-muted-foreground">Company</div>
//                 <div className="text-base">{selectedQuote.company || 'Not provided'}</div>
//               </div>
//               <div>
//                 <div className="text-sm font-medium text-muted-foreground">Shipment Type</div>
//                 <div className="text-base capitalize">{selectedQuote.shipment_type}</div>
//               </div>
//               <div>
//                 <div className="text-sm font-medium text-muted-foreground">Origin</div>
//                 <div className="text-base">{selectedQuote.origin}</div>
//               </div>
//               <div>
//                 <div className="text-sm font-medium text-muted-foreground">Destination</div>
//                 <div className="text-base">{selectedQuote.destination}</div>
//               </div>
//               <div>
//                 <div className="text-sm font-medium text-muted-foreground">Weight</div>
//                 <div className="text-base">{selectedQuote.weight || 'Not provided'}</div>
//               </div>
//               <div>
//                 <div className="text-sm font-medium text-muted-foreground">Dimensions</div>
//                 <div className="text-base">{selectedQuote.dimensions || 'Not provided'}</div>
//               </div>
//               <div>
//                 <div className="text-sm font-medium text-muted-foreground">Pickup Date</div>
//                 <div className="text-base">{selectedQuote.pickup_date || 'Not specified'}</div>
//               </div>
//               <div className="sm:col-span-2">
//                 <div className="text-sm font-medium text-muted-foreground">Additional Information</div>
//                 <div className="text-base whitespace-pre-wrap">{selectedQuote.additional_info || 'None'}</div>
//               </div>
//               <div>
//                 <div className="text-sm font-medium text-muted-foreground">Submitted</div>
//                 <div className="text-base">{formatDate(selectedQuote.created_at)}</div>
//               </div>
//               <div>
//                 <div className="text-sm font-medium text-muted-foreground">Status</div>
//                 <Badge variant={selectedQuote.status === 'completed' ? 'default' : 'secondary'}>
//                   {selectedQuote.status}
//                 </Badge>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }




import { useEffect, useState } from 'react';
import { supabase } from '@/db/supabase';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock } from 'lucide-react';

interface Submission {
  id: string;
  type: 'contact' | 'quote';
  name: string;
  email: string;
  message: string;
  status: 'pending' | 'completed';
  created_at: string;
}

const PAGE_SIZE = 10;

export default function AdminSubmissions() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchSubmissions = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const { data, error, count } = await supabase
        .from('submissions')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);

      if (error) throw error;
      if (data) setSubmissions(data);
      if (count !== null) setTotalPages(Math.ceil(count / PAGE_SIZE));
    } catch (error) {
      console.error('Failed to fetch submissions:', error);
      setErrorMsg('Failed to load submissions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, [page]);

  const updateStatus = async (id: string, status: 'pending' | 'completed') => {
    try {
      const { error } = await supabase
        .from('submissions')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
      fetchSubmissions();
    } catch (error) {
      console.error('Failed to update status:', error);
      alert('Failed to update status. Try again.');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-primary" />
      </div>
    );
  }

  if (errorMsg) {
    return <div className="text-red-500 text-center py-4">{errorMsg}</div>;
  }

  if (submissions.length === 0) {
    return <div className="text-center py-4">No submissions found.</div>;
  }

  return (
    <div className="space-y-4">
      {submissions.map((sub) => (
        <Card key={sub.id} className="border-border">
          <CardHeader className="flex items-center justify-between">
            <CardTitle>{sub.type === 'contact' ? 'Contact Form' : 'Quote Request'}</CardTitle>
            <span className="flex items-center gap-1 text-sm capitalize">
              {sub.status === 'pending' ? (
                <Clock className="h-4 w-4 text-yellow-500" />
              ) : (
                <CheckCircle className="h-4 w-4 text-green-500" />
              )}
              {sub.status}
            </span>
          </CardHeader>
          <CardContent className="space-y-2">
            <CardDescription>
              <strong>Name:</strong> {sub.name}
            </CardDescription>
            <CardDescription>
              <strong>Email:</strong> {sub.email}
            </CardDescription>
            <CardDescription>
              <strong>Message:</strong> {sub.message}
            </CardDescription>
            <CardDescription>
              <strong>Submitted:</strong> {new Date(sub.created_at).toLocaleString()}
            </CardDescription>
            {sub.status === 'pending' && (
              <Button size="sm" onClick={() => updateStatus(sub.id, 'completed')}>
                Mark as Completed
              </Button>
            )}
          </CardContent>
        </Card>
      ))}

      {/* Pagination */}
      <div className="flex justify-center space-x-2 mt-4">
        <Button size="sm" disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Previous
        </Button>
        <span className="px-2 py-1 text-sm">
          Page {page} of {totalPages}
        </span>
        <Button size="sm" disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
}
